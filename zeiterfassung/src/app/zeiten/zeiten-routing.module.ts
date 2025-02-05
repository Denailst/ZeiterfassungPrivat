import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZeitenPage} from "./zeiten.page";

const routes: Routes = [
  {
    path: '',
    component: ZeitenPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZeitenRoutingModule {}
