import { Component, OnInit } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Router } from '@angular/router';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.page.html',
  styleUrls: ['./my-network.page.scss'],
})
export class MyNetworkPage implements OnInit {

  showSplash :boolean = true;
  isDebug: boolean = false;
  AccessToken: string = "";
  LevelNumber : string = "1";
  LifeTimeEarning : number = 0;
  Downlines :[];
  Level={
    Level1Count:0,
    Level2Count:0,
    Level3Count:0
  }
  constructor(
    private api: NativeApiService,
    private restApi: RestApiService,
    private platform: Platform,
    private dataTransaction: DataTransactionService,
    private alert: AlertProviderService,
    private router: Router,
    private routerProvider : RouteProviderService
  ) { 
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
    
    this.LifeTimeEarning = dataTransaction.DataParam;
  }

  ngOnInit() {
    this.dataTransaction.getAccessToken().then(acc => {
      if (acc == null)
        console.log('access token does not detected');
      else {
        this.AccessToken = acc.toString();
        this.GetBrief();
        this.GetMyNetwork();
      }
    })
  }

  GetBrief(){
    if (!this.isDebug) {

      this.api.GetBrief_Network(this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.Level = result.Data;
            } else {
              this.alert.presentToast(result.ErrorMessage)
            }
          } else {
            this.alert.presentToast(response.error)
          }

        }
      ).catch(error => {
        this.alert.presentToast(error);
      })
    } else {
      this.restApi.GetBrief_Network(this.AccessToken).subscribe(
        reponse => {
          let result = this.restApi.converResponseToJson(reponse);
          if (result.ErrorCode == "0") {
            this.Level = result.Data;
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

  segmentChanged(event){
    let target = null;
    if(event.target.localName =="span"){
      target = event.target.parentElement;
    }

    if(event.target.localName =="p"){
      target = event.target.parentElement;
    }

    if(event.target.localName == "div"){
      target = event.target;
    }
    let elements = Array.from(document.querySelectorAll('.network-button-active'));
    elements.forEach(element => {
      element.classList.remove('network-button-active');
    });
    
    let selectElement = document.getElementById(target.id);
    if(selectElement != null){
      selectElement.classList.add('network-button-active');
    }

    this.LevelNumber = target.dataset.level;
    this.GetMyNetwork();
  }

  GetMyNetwork(){
    if (!this.isDebug) {

      this.api.GetMyNetwork(`${this.LevelNumber}`,'1000','1',this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.Downlines=[];
              this.Downlines = result.Data.Downlines;
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage)
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          } else {
            alert(JSON.stringify(response));
            this.alert.presentToast(response.error)
          }        
        }
      ).catch(error => {
        this.alert.presentToast(error);
      })
    }
  }
}
