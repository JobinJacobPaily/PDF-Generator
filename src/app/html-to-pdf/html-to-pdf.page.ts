import { Component, OnInit } from '@angular/core';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx'

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.page.html',
  styleUrls: ['./html-to-pdf.page.scss'],
})
export class HtmlToPdfPage implements OnInit {

  constructor(
    public pdfGenerator:PDFGenerator
  ) { }

  ngOnInit() {
  }

  pdfgenerator()
  { 
    var url ='www.google.com'
    var options ={
          documentSize: 'A4',
          type: 'base64'
                 }

    this.pdfGenerator.fromURL(url, options).then(base64String => {
      
      console.log(base64String)});
  }
}
