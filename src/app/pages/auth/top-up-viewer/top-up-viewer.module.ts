import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopUpViewerPage } from './top-up-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpViewerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopUpViewerPage]
})
export class TopUpViewerPageModule {}
