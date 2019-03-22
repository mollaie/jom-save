import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopUpAccountInfoPage } from './top-up-account-info.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpAccountInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopUpAccountInfoPage]
})
export class TopUpAccountInfoPageModule {}
