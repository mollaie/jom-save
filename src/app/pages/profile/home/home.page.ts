import { Component, OnInit } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Navbar: string = "Social"
  QRCode: string = "";
  Model = {
    DisplayName: "",
    MemberId: '',
    Email: '',
    Mobile: '',
    Gender: 'MKYTY',
    UserType: "",
    Roles: "",
    NextStep: "",
    Upline: {
      MemberId: "",
      DisplayName: ""
    }
  }

  AccessToken: string = "";
  isDebug: boolean = false;

  ErrorMessage: string = '';
  Data: any;

  zbarOptions: any;
  scannedResult: any;
  encodeData: any;

  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private routerProvider: RouteProviderService,
    private alert: AlertProviderService, 
    private socialSharing : SocialSharing,    
  ) {
    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

    this.dataTransaction.getProfile().then(val => {
      if (val == undefined || val == '') this.router.navigate(['auth-phone']);
      else {
        this.Model = val;
        this.encodedText(this.Model.MemberId);
        this.dataTransaction.getAccessToken().then(acc => {
          this.AccessToken = acc.toString();
        })
      }
    })
  }

  ngOnInit() {


  }



  encodedText(input) {
    this.encodeData = input;
  }

  doCheckHistory() {
    this.router.navigateByUrl('profile/profile/wallet/wallet-history');

  }

  doShare(){
    let msg = "Hey!Want to earn high active and passive income monthly,simple and hassle-free? JomSave is the one for you! Join us now! https://www.youtube.com/watch?v=29PD2TFxJJc  \n  Yes,I want in! \n https://member-stage.jomsave.com/Home/Login?refCode="+this.Model.MemberId;
    
    this.socialSharing.share(msg,'JomSave',null,'');
  }

}
