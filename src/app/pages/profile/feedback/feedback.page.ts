import { Component, OnInit } from '@angular/core';
import {Platform } from '@ionic/angular';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  isDebug: boolean = false;
  AccessToken: '';
  ErrorMessage: string = '';
  Satisfy: string = "";
  Model = {
    Title: '' ,
    Body : '',
    NumberOfStars:1
  }
  constructor(
    private platform: Platform,
    private api: NativeApiService,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private dataTransaction: DataTransactionService,
    private routerProvider : RouteProviderService,
    private router: Router
  ) { 


    if (platform.is('cordova')) {
      this.isDebug = false;
    }
    else this.isDebug = true;

    this.dataTransaction.getAccessToken().then(acc => {
      this.AccessToken = acc.toString();
    })

    this.Model.Title = "";
    this.Model.Body = "";
  }

  ngOnInit() {
  }

  doChangeSatisfy(num) {
    this.Model.NumberOfStars = num;
    switch (num) {
      case 1:
        this.Satisfy = "Angry";        
        break;
      case 2:
        this.Satisfy = "Sad";
        break;
      case 3:
        this.Satisfy = "Happy";
        break;
      case 4:
        this.Satisfy = "Love";
        break;
    }
  }

  doNext(){
    if (!this.isDebug) {
    
        this.api.AddFeedback(this.Model.Title,this.Model.Body,this.Model.NumberOfStars, this.AccessToken)
          .then(response => {
            if (response.status == 200) {
              let result = this.api.converResponseToJson(response.data);
              if (result.ErrorCode == "0") {
                this.alert.showErrorMessageAlert('Thank you for taking time to provide valueable feedback to us.We will response to your feedback within 2 working days.');
                this.router.navigate(['profile/profile/menu'])
              } else {
                this.alert.presentToast(result.ErrorMessage);
                if(result.ErrorCode == 1002){
                  this.dataTransaction.logOut();
                  this.routerProvider.nextStep('Phone');
                }
              }
            }
          }).catch(error => {
            this.alert.presentToast(error)
          })
      }
     else {
      this.restApi.AddFeedback(this.Model.Title,this.Model.Body,this.Model.NumberOfStars, this.AccessToken)
        .subscribe(response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.alert.presentToast('Your Feedback is saved.')
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        })

    }

  }

}
