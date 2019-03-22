import { Component, OnInit } from '@angular/core';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { RestApiService } from '../../../services/rest-api.service'
import { environment } from '../../../../environments/environment.prod';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular'
import { NativeApiService } from 'src/app/services/native-api/native-api.service';

@Component({
  selector: 'app-top-up-viewer',
  templateUrl: './top-up-viewer.page.html',
  styleUrls: ['./top-up-viewer.page.scss'],
})
export class TopUpViewerPage implements OnInit {

  AccessToken:string = '';
  ErrorMessage: string ='';
  orderType: string ='';
  cardNo: string ='';
  securityCode: string ='';
  epMonth: string ='';
  epYear: string ='';
  cardHolder: string ='';
  isMethodCalled : boolean = false;
  isDebug : boolean = false;
  isScriptExecuted :boolean = false;

  constructor(private themeableBrowser: ThemeableBrowser,
    private restApi: RestApiService,
    private api : NativeApiService,
    private router: Router,
    private dataTransaction: DataTransactionService,
    private platform : Platform
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })
    this.orderType = router.getCurrentNavigation().extras.state.orderType;
    this.securityCode = router.getCurrentNavigation().extras.state.securityCode;
    this.cardNo = router.getCurrentNavigation().extras.state.cardNo;
    this.cardHolder = router.getCurrentNavigation().extras.state.cardHolder;
    this.epYear = router.getCurrentNavigation().extras.state.expireDate.substring(0, 4);
    this.epMonth = router.getCurrentNavigation().extras.state.expireDate.replace(`${this.epYear}-`, '');

    if(platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }


  ngOnInit() {
    this.dataTransaction.getAccessToken().then(acc => {
      if(acc == null)
        console.log('access token does not detected');
      else{
        this.AccessToken = acc.toString();
        this.createOrder();
      }
      
    })
  }

  //oderType = {CreditCard / All}
  createOrder() {
    if(!this.isMethodCalled){
      this.isMethodCalled = true;
      let url='https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';

      if(!this.isDebug){
        this.api.CreateOrder(this.orderType, environment.orderAmount, this.AccessToken).then(
       
          (response) => {
            console.log(response);
            let result = this.api.converResponseToJson(response.data);
            if (result != null && result.ErrorCode == 0) {
              const model = {
                merchantId: result.Data.MerchantId,
                amount: environment.orderAmount,
                orderRef: result.Data.OrderRef,
                successUrl: result.Data.SuccessUrl,
                failUrl: result.Data.FailUrl,
                errorUrl: result.Data.ErrorUrl,
                secureHash: result.Data.Hash,
                lang: "E",
                currCode: '458',
                payType: 'N',
                remark: 'JOMSAVE_KSJOA01B3YHD7dUS5CXX01HD6X64P0B1QDD',
                cardNo: this.cardNo ,
                securityCode: this.securityCode,
                epMonth: this.epMonth,
                epYear: this.epYear,
                cardHolder: this.cardHolder,
                pMethod : 'VISA'
              }
              this.createPaymentForm(model);
            } else {
              this.ErrorMessage = result.ErrorMessage;
            }
          },
          (error) => {
    
          }
        )
      }
      else{
        this.restApi.CreateOrder(this.orderType, environment.orderAmount, this.AccessToken).subscribe(
       
          (response) => {
            console.log(response);
            let result = this.api.converResponseToJson(response);
            if (result != null && result.ErrorCode == 0) {
              const model = {
                MerchantId: result.Data.MerchantId,
                amount: environment.orderAmount,
                orderRef: result.Data.OrderRef,
                successUrl: result.Data.SuccessUrl,
                failUrl: result.Data.FailUrl,
                errorUrl: result.Data.ErrorUrl,
                Hash: result.Data.Hash,
                Lang: "E",
                paymentType: "N",
                currCode: '',
                payType: '',
                remark: '',
                cardNo: this.cardNo ,
                securityCode: this.securityCode,
                epMonth: this.epMonth,
                epYear: this.epYear,
                cardHolder: this.cardHolder,
                pMethod : this.orderType
              }
              this.createPaymentForm(model);
            } else {
              this.ErrorMessage = result.ErrorMessage;
            }
          },
          (error) => {
    
          }
        )
      }


    }
  
  }

  createPaymentForm(model){
    //Browser Option

    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#fbb03b'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true,
        staticText: 'JomSave'
      },
      backButton: {
        image: 'back',
        imagePressed:'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        image: 'forward',
        imagePressed:'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
      },
      closeButton: {
        image: 'close',
        imagePressed:'close_pressed',
        align: 'left',
        event: 'closePressed'
      },
      backButtonCanClose: false,

    };

    //Form Script
    let url='https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
    let direction = 'https://member.jomsave.com/Home/TutorialSlides';

  var script = 'var form = document.createElement("form");';      
      script += 'form.method="post";';
      script += 'form.setAttribute("action","'+url+'");';
 for (var data in model) {
      script += 'var '+data+'hiddenField = document.createElement("input");';
      script += data+'hiddenField.setAttribute("type", "hidden");';
      script += data+'hiddenField.setAttribute("name","' + data +'");';
      script += data+'hiddenField.setAttribute("value","' + model[data] + '");';
      script += 'form.appendChild('+data+'hiddenField);';
  }   
      script += 'document.body.appendChild(form);';
      script += 'form.submit();';

    try {
      const browser: ThemeableBrowserObject = this.themeableBrowser.create(direction, '_blank', options);
    
      browser.on('closePressed').subscribe(data => {
        browser.close();
        this.isMethodCalled = false;
      })

      browser.on('exit').subscribe(e => {
        
           alert(e.url) 
      })

      
      browser.on('loadstop').subscribe(data => {  
        if(!this.isScriptExecuted){
          browser.executeScript({code:script}).then(response=>{
            this.isScriptExecuted = true;
          })
        }
        
      })

      browser.on('event_getURL').subscribe(event => {
        alert('event');
      })
    }
    catch (err) {
      alert(err)
    }
  }

}
