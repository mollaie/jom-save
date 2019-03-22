import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReferralPage } from './referral.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


const routes: Routes = [
  {
    path: '',
    component: ReferralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReferralPage],
  providers:[
    BarcodeScanner
  ]
})
export class ReferralPageModule {}
