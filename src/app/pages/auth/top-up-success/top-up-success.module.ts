import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopUpSuccessPage } from './top-up-success.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopUpSuccessPage]
})
export class TopUpSuccessPageModule {}
