import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
 
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  letterObj = {
    to: '',
    from: '',
    text: ''
  }
 
  pdfObj = null;
 
  constructor(
    public navCtrl: NavController,
     private plt: Platform,
      private file: File,
       private fileOpener: FileOpener,
       private social:SocialSharing
       ) { }
  socialshare()
   {
     this.social.canShareViaEmail().then(() =>{

      this.social.shareViaEmail('Hello','Subject',['das07mohan@gmail.com'],['Hello this is a test mail']);
     }
     
     ).catch((err) =>
     {
       console.log(err);
     } );
   }
   whatsappshare()
   {
     this.social.share('hello','hi',this.file.externalDataDirectory+'myletter.pdf');
     console.log('Whatsapp share : '+this.file.externalDataDirectory+'myletter.pdf')
   }
   whatshare2()
   {
   /*  this.pdfObj.getBuffer((buffer) => {
      var arr = new Uint8Array(buffer);
      var bin = arr.buffer;
      var blob = new Blob([bin], { type: 'application/pdf' });
      this.social.share('blob',this.pdfObj.open()); */
   // });
   }
 
  createPdf() {
    var xx=[{text:'Description of Good'},{text:'HSN/SAC'},{text:'MRP/Marginal'},{text:'Quantity'},{text:'Rate'},{text:'Per'},{text:'Disc%'},{text:'Amount'}];
    var data = {
      content: [
      
        {
          style:'mynew',
          table: {
              widths: [200,100, 200,],
              heights:[20,20,20],
            body: [
                         
              [{text:'DIMS ERP SALE\n',rowSpan:3},'Inv No .\n 1908','Date\n12/1/2020'],
              ['',{text:'',colSpan:2,rowSpan:3},''],
              ['','',''],
              [{text:'Buyer, \nParty 2\nAd rs 1,\n  Ad rs 2,\n  Ad rss 3\n'},{text:'',colSpan:2},''],
              
              
            ]
          },
          layout:''
          
        },
        {    
              table: {
              widths:[129,'*','*','*','*','*','*','*'],
              heights:[20,20,20],
            body: [xx,
                    [{text:'Item1',border:[true,false,true,false]}
                    ,{text:1001,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:1,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:'Nos',border:[true,false,true,false]}
                    ,{text:100,border:[true,false,true,false]}
                    ,{text:0,border:[true,false,true,false]}],
                    
                    
                    [{text:'Item1',border:[true,false,true,false]}
                    ,{text:1002,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:1,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:'Nos',border:[true,false,true,false]}
                    ,{text:0,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}],
                    
                    
                  [{text:'SubTotal',alignment:'right',border:[true,true,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:50,border:[true,true,true,false]}],
                  
                  
                    [{text:'CGst',alignment:'right',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},{text:50*0.09,border:[true,false,true,false]}]
                    
                    ,
                    [{text:'SGst',alignment:'right',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:50*0.09,border:[true,false,true,false]}],
                    
                    ['Total','','','','','','',59]
     
                  
               
                
            ]
            }
        },
        {
           
            table:{
                widths:[519],
                 body:[[{text:'Amount Chargeable (in words)',style:'header',border:[true,false,true,false]}],
                 [{text:'Indian Rupees fifty nine Only',style:'subHeader',border:[true,false,true,true]}],]
            }
        },
        {
            
            table:{
                widths:[60,90,70,'*',70,'*',90],
                body:[
                    [{text:'HSN/SAC',rowSpan:2},{text:'Taxable Value',rowSpan:2},{text:'Central Tax',colSpan:2},{text:'HSN'},{text:'State Tax',colSpan:2},{text:'HSN'},{text:'Total Tax Amount',rowSpan:2}],
                    [{text:'HSN/SAC'},{text:'HSN'},{text:'Rate'},{text:'Amount'},{text:'Rate'},{text:'Amount'},{text:'HSN'}],
                                    [{text:1001,alignment:'right'},{text:50},{text:'9%'},{text:4.5},{text:'9%'},{text:4.5},{text:9}],
                                    [{text:1002,alignment:'right'},{text:0},{text:'9%'},{text:0},{text:'9%'},{text:0},{text:0}],
                                    [{text:'Total',bold:true,alignment:'right'},{text:50},{text:''},{text:4.5},{text:''},{text:4.5},{text:9}]
    
                    
                ]
            }
        },
        {
             table:{
                widths:[150,360],
                heights:100,
         
               // margin:[100,0,0,0],
                 body:[[{text:'Total Amount In Words : ',
                 border:[true,false,false,false],style:'marg'},
                 
                 {text:'Indian Rupees nine Only',
                     border:[false,false,true,false]
                 }]]
             },
             
        },
          {
           
            table:{
                widths:[120,390],
                 body:[
                     [{text:"Company's PAN :",border:[true,false,false,false],style:'marg'},
                     {text:"123456",border:[false,false,true,false]}],
                     ]
            }
        },
        {
            table:{
                widths:[250,260],
                heights:100,
                body:[[{text:'Declaration :\nWe declare that this invoice shows the actual Price of the goods described and that all particulars are true and  correct.',
                border:[true,false,false,false],style:'decler'},{text:'for impose route sale',bold:true,border:[true,true,true,false]}]
               
                ]
                
            }
        },
        {
            table:{
                 widths:[250,260],
                body:[
                    [{text:'',border:[true,false,false,true]},{text:'Authorised Signatory',border:[true,false,true,true],alignment:'center'}]
                    ]
            }
        },
          {text: 'This is a Computer Generated Invoice', fontSize: 12, bold: true,alignment:'center',margin:[0,10,0,0]}
        
      
        
    ],
      styles: {
          decler:{
              margin:[20,35,0,0]
          
          }
          ,
           marg:{
              margin:[20,0,0,0]
          
          },
            header:{
             bold: false,
          fontSize: 16,
          color: 'black'
          
           },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        subHeader: {
          bold: true,
          fontSize: 16,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    
    }
    this.pdfObj = pdfMake.createPdf(data);
  }
 
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }


  downloadtest1()
  {
    console.log(this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
  }


  downloadtest2()
  {
    this.pdfObj.open();
  }


  downloadtest3()
  {
    this.pdfObj.download();
  }

  downloadDocDir() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.externalDataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          console.log(this.file.documentsDirectory);
          this.fileOpener.open(this.file.externalDataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
 
}
/* 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

} */
