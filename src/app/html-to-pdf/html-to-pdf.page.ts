import { Component, OnInit } from '@angular/core';
import {PDFGenerator} from '@ionic-native/pdf-generator/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.page.html',
  styleUrls: ['./html-to-pdf.page.scss'],
})
export class HtmlToPdfPage implements OnInit {

  pdfcontainer;

  constructor(
    public file :File,
    public fileOpener :FileOpener,
    public pdfGenerator:PDFGenerator
  ) { }

  ngOnInit() {
  }

  pdfgenerator()
  { 
    var url ='https://www.google.com';
    const data  = document.getElementById('hello');
    var options ={
          documentSize: 'A4',
          type: 'base64'
                 }

    this.pdfGenerator.fromData(data.outerHTML, options).then(base64String => {

      // this.pdfcontainer = new Blob([base64String], {type :'application/pdf'});
     // this.pdfcontainer = base64String
      console.log(base64String);
      fetch('data:application/pdf;base64,'+ base64String,
      {
        method :'post'
      }).then((res)=>res.blob()).then((blob) =>{this.pdfcontainer = blob; console.log('blob created');})
    });
  }

  writeFile()
   {
    
    this.file.writeFile(this.file.externalDataDirectory,'file.pdf',this.pdfcontainer,{replace : true})
    .then(_ => console.log('File written successfully'));
   }

  openfile()
   {
     this.fileOpener.open(this.file.externalDataDirectory+'file.pdf','application/pdf')
     .then( _ => console.log('opnening pdf'));
   }
  
}
