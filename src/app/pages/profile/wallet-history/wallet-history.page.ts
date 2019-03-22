import { Component, OnInit } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RouteProviderService } from '../../../services/route-provider/route-provider.service';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.page.html',
  styleUrls: ['./wallet-history.page.scss'],
})
export class WalletHistoryPage implements OnInit {

  showSplash: boolean = true;
  isDebug: boolean = false;
  AccessToken: string = "";
  rows: number = 10;
  WalletHistory = {
    Transactions: []
  }
  onLoading: boolean = false;

  constructor(
    private api: NativeApiService,
    private restApi: RestApiService,
    private platform: Platform,
    private dataTransaction: DataTransactionService,
    private alert: AlertProviderService,
    private routerProvider: RouteProviderService
  ) {

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
    this.dataTransaction.getAccessToken().then(acc => {
      if (acc == null)
        console.log('access token does not detected');
      else {
        this.AccessToken = acc.toString();
        this.GetTransactions();
      }

    })
  }

  GetTransactions(infiniteScroll?) {
    this.onLoading = true;
    setTimeout(() => {
      if (!this.isDebug) {

        this.api.GetTransactions(`${this.rows}`, `${this.dataTransaction.page}`, this.AccessToken).then(
          response => {
            if (response.status == 200) {
              let result = this.api.converResponseToJson(response.data);
              if (result.ErrorCode == "0") {
                this.WalletHistory.Transactions = this.WalletHistory.Transactions.concat(result.Data.Transactions);
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
        this.restApi.GetTransactions(`${this.rows}`, `${this.dataTransaction.page}`, this.AccessToken).subscribe(
          reponse => {
            let result = this.restApi.converResponseToJson(reponse);
            if (result.ErrorCode == "0") {
              this.WalletHistory.Transactions = this.WalletHistory.Transactions.concat(result.Data.Transactions);
            } else {
              console.log(result.ErrorMessage)
            }
          },
          error => {
            console.log(error)
          }
        )
      }

      this.onLoading = false;
    }, 500);


    if (infiniteScroll) {
      infiniteScroll.target.complete();
    }
  }

  loadMore(infiniteScroll) {
    this.dataTransaction.page++;
    this.GetTransactions(infiniteScroll);
  }
}
