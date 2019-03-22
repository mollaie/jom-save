import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import {NgxQRCodeModule} from 'ngx-qrcode2'
import {ModalImagePageModule} from '../modal/modal-image/modal-image.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ModalImagePageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
