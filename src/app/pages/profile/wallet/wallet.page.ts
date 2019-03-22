import { Component, OnInit } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform, NavController } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Router, NavigationEnd } from '@angular/router';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  Wallet = {
    LifeTimeEarning: "0",
    CurrentBalance: "0",
    WithdrawalAminFee: "0",
    AmountToBeRecieved: "0"
  }

  isDebug: boolean = false;
  AccessToken: string = "";
  routerSubscription: any;
  constructor(
    private api: NativeApiService,
    private restApi: RestApiService,
    private platform: Platform,
    private dataTransaction: DataTransactionService,
    private alert: AlertProviderService,
    private router: Router  ,
    private navControll : NavController,
    private routerProvider : RouteProviderService) {

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;


    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/profile/profile/notification') {
            this.getBrief();
          }
        }
      }
    )
  }

  ngOnInit() {
    this.dataTransaction.getAccessToken().then(acc => {
      if (acc == null)
        console.log('access token does not detected');
      else {
        this.AccessToken = acc.toString();
        this.getBrief();
      }
    })
  }

  getBrief() {
    if (!this.isDebug) {

      this.api.GetBrief_Wallet(this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.Wallet = result.Data;
            } else {
              this.alert.presentToast(result.ErrorMessage)
              if (result.ErrorCode == 1002) {
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          } else {
            this.alert.presentToast(response.error)
          }

        }
      ).catch(error => {
        this.alert.presentToast(error);
      })
    } else {
      this.restApi.GetBrief_Wallet(this.AccessToken).subscribe(
        reponse => {
          let result = this.restApi.converResponseToJson(reponse);
          if (result.ErrorCode == "0") {
            this.Wallet = result.Data
          } else {
            console.log(result.ErrorMessage)
          }
        },
        error => {
          console.log(error)
        }
      )
    }
  }

  doWalletHistory() {

    this.router.navigateByUrl('profile/profile/wallet/wallet-history');
  }

  doMyNetwork() {
     this.dataTransaction.DataParam = this.Wallet.LifeTimeEarning;
    this.router.navigateByUrl('profile/profile/wallet/my-network');
  }

  doShowMessage(){
    this.alert.showErrorMessageAlert(`You need a minimum RM${this.Wallet.WithdrawalAminFee} of Withdrawable Amount to proceed.`);
  }
}
