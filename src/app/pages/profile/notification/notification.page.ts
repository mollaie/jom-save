import { Component, OnInit, LOCALE_ID, ViewChild } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform, IonInfiniteScroll } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Router, NavigationEnd } from '@angular/router';
import { Globalization } from '@ionic-native/globalization/ngx';
import {RouteProviderService} from '../../../services/route-provider/route-provider.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  showSplash: boolean = true;
  isDebug: boolean = false;
  AccessToken: string = "";

  Notifications = [];
  routerSubscription: any;
  offset: string = "+0430";
  rows: number = 5;

  constructor(
    private api: NativeApiService,
    private restApi: RestApiService,
    private platform: Platform,
    private dataTransaction: DataTransactionService,
    private alert: AlertProviderService,
    private router: Router,
    private globalization: Globalization,
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
        this.GetHistory();
      }

      this.globalization.getDatePattern(null).then(
        callback => {
          this.offset = callback.utc_offset.toString();
        }
      )
    })

    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/profile/profile/notification') {
            this.GetHistory();
          }
        }
      }
    )
  }

  GetHistory(infiniteScroll?) {
    if (!this.isDebug) {

      this.api.GetHistory(`${this.rows}`, `${this.dataTransaction.page}`, this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.Notifications = this.Notifications.concat(result.Data.Notifications);
            } else {
              this.alert.presentToast(result.ErrorMessage)
              if(result.ErrorCode == 1002){
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
      this.restApi.GetHistory(`${this.rows}`, `${this.dataTransaction.page}`, this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.Notifications = this.Notifications.concat(result.Data.Notifications) ;
          } else {
            console.log(result.ErrorMessage)
          }
        },
        error => {
          console.log(error)
        }
      )
    }

    if (infiniteScroll) {
      infiniteScroll.target.complete();
    }
  }

  loadMore(infiniteScroll) {
    this.dataTransaction.page++;
    this.GetHistory(infiniteScroll);
  }

}
