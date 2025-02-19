import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StecherPage } from './stecher.page';
import { StecherRoutingModule } from "./stecher-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StecherRoutingModule,
  ],
  declarations: [StecherPage],
  providers: [DatePipe]
})


export class StecherPageModule {}
