import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StecherPage} from "./stecher.page";

const routes: Routes = [
  {
    path: '',
    component: StecherPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StecherRoutingModule {}
