import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZeitenPage } from './zeiten.page';
import { ZeitenRoutingModule } from "./zeiten-routing.module";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ZeitenRoutingModule,
  ],
  declarations: [ZeitenPage]
})
export class ZeitenPageModule {}
