import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlToPdfPageRoutingModule } from './html-to-pdf-routing.module';

import { HtmlToPdfPage } from './html-to-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlToPdfPageRoutingModule
  ],
  declarations: [HtmlToPdfPage]
})
export class HtmlToPdfPageModule {}
