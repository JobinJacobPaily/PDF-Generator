import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlToPdfPage } from './html-to-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlToPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlToPdfPageRoutingModule {}
