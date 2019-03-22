import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertProviderService {

  constructor(
    private alertController : AlertController,
    private loadingCntroller : LoadingController,
    public toastController: ToastController
  ) { }


  async showErrorMessageAlert(msg){
    const alert = await this.alertController.create({
      header: 'Jom-Save',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position:'bottom'
    });
    toast.present();
  }
}
