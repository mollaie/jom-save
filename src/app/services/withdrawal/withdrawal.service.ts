import { Injectable } from '@angular/core';
import { DataTransactionService } from '../data-transaction/data-transaction.service';
import { NativeApiService } from '../native-api/native-api.service';
import { RestApiService } from '../rest-api.service';
import { RouteProviderService } from '../route-provider/route-provider.service';
import { Platform, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

  isDebug: boolean = false;
  AccessToken: string = "";
  constructor(
    private data: DataTransactionService,
    private api: NativeApiService,
    private restApi: RestApiService,
    private router: RouteProviderService,
    private platform: Platform,
    public alertController: AlertController
  ) { 
    if (platform.is('cordova')) this.isDebug = false;
    this.isDebug = true;
  }

  doPreRequestWithdraw(){

  }

  doRequestWithdraw(){
    
  }
}
