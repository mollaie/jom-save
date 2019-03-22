import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { ConstantService } from './../../../services/constant/constant.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular'
import { RestApiService } from 'src/app/services/rest-api.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})
export class TopUpPage implements OnInit {

  Model = {
    Phone: '',
    CreditCard: '',
    ExpireDate: '',
    CVV: '',
    Name: '',
  }


  AccessToken: string = '';
  ErrorMessage: string = '';
  isMethodCalled: boolean = false;
  isDebug: boolean = false;
  isScriptExecuted: boolean = false;
  isStillHold: boolean = false;


  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private restApi: RestApiService,
    private api: NativeApiService,
    private platform: Platform,
    private themeableBrowser: ThemeableBrowser,
    private routerProvider: RouteProviderService,
    private constantService: ConstantService,
    private alert: AlertProviderService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })
  }

  ngOnInit() {
    this.dataTransaction.getAccessToken().then(acc => {
      if (acc == null)
        console.log('access token does not detected');
      else {
        this.AccessToken = acc.toString();
      }

    })
  }

  doLogin() {
    this.router.navigate(['auth-phone']);
  }

  doNext() {

  }

  doCredit() {
    this.router.navigate(['top-up-account-info'])
  }

  doBank() {
    this.createOrder();
  }

  doSkip() {
    console.log('skip clicked')
    this.router.navigate(['change-password'])
  }

  //oderType = {CreditCard / All}
  createOrder() {
    if (!this.isMethodCalled) {
      this.isMethodCalled = true;
      let url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
      let epYear: string = this.Model.ExpireDate.substring(0, 4);
      let epMonth: string = this.Model.ExpireDate.replace(`${epYear}-`, '');

      if (!this.isDebug) {
        this.api.CreateOrder('Subscription', environment.orderAmount, this.AccessToken).then(

          (response) => {
            if (response.status == 200) {
              let result = this.api.converResponseToJson(response.data);
              if (result != null && result.ErrorCode == 0) {
                let model = this.createModel(result.Data, epMonth, epYear);
                this.createPaymentForm(model);
              } else {
                this.alert.showErrorMessageAlert(`API Error = ${result.ErrorMessage}`)
              }
            }
          }
        ).catch((error) => {
          this.alert.showErrorMessageAlert(`System Error ${error}`);
        })
      }
      else {
        this.restApi.CreateOrder('Subscription', environment.orderAmount, this.AccessToken).subscribe(

          (response) => {
            console.log(response);
            let result = this.restApi.converResponseToJson(response);
            if (result != null && result.ErrorCode == 0) {
              let model = this.createModel(result.Data, epMonth, epYear);
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

  createModel(reponse, epMonth, epYear) {
    let model = {
      merchantId: reponse.MerchantId,
      amount: environment.orderAmount,
      orderRef: reponse.OrderRef,
      successUrl: reponse.SuccessUrl,
      failUrl: reponse.FailUrl,
      errorUrl: reponse.ErrorUrl,
      secureHash: reponse.Hash,
      lang: "E",
      currCode: '458',
      payType: 'N',
      remark: 'JOMSAVE_KSJOA01B3YHD7dUS5CXX01HD6X64P0B1QDD',
      cardNo: '',
      securityCode: '',
      epMonth: '',
      epYear: '',
      cardHolder: '',
      pMethod: 'MYCLEAR'
    }
    this.alert.showErrorMessageAlert(JSON.stringify(model));
    return model;
  }

  createPaymentForm(model) {
    //Browser Option

    const   options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#fbb03b'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true,
        staticText: 'JomSave'
      },
      // backButton: {
      //   wwwImage:'assets/images/Back.png',
      //   align: 'left',
      //   event: 'backPressed'
      // },
      // forwardButton: {
      //   image: 'forward',
      //   imagePressed: 'forward_pressed',
      //   align: 'left',
      //   event: 'forwardPressed'
      // },
      closeButton: {
        wwwImage:'assets/images/Close.png',
        align: 'left',
        event: 'closePressed'
      },
      backButtonCanClose: false,
  
    };

    //Form Script
    let url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
    let direction = 'https://member-stage.jomsave.com//Home/EmptyView';

    var script = 'var form = document.createElement("form");';
    script += 'form.method="post";';
    script += 'form.setAttribute("action","' + url + '");';
    for (var data in model) {
      script += 'var ' + data + 'hiddenField = document.createElement("input");';
      script += data + 'hiddenField.setAttribute("type", "hidden");';
      script += data + 'hiddenField.setAttribute("name","' + data + '");';
      script += data + 'hiddenField.setAttribute("value","' + model[data] + '");';
      script += 'form.appendChild(' + data + 'hiddenField);';
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
        this.isStillHold = true;
        this.isMethodCalled = false;
        this.doCallGetProfile();
      })


      browser.on('loadstop').subscribe(data => {
        if (!this.isScriptExecuted) {
          browser.executeScript({ code: script }).then(response => {
            this.isScriptExecuted = true;
          })
        }

      })

    }
    catch (err) {
      this.alert.showErrorMessageAlert(err)
    }
  }


  doCallGetProfile() {
    setTimeout(() => {
      if (this.isStillHold) {
        this.doGetProfile()
      }

    }, 5000);

  }

  async doGetProfile() {

    if (!this.isDebug) {
      await this.api.GetProfile(this.AccessToken).then(
        response => {
          if (response.status == 200) {
            this.isStillHold = false;
            let result = this.api.converResponseToJson(response.data);
            this.dataTransaction.setProfile(result.Data);
            this.routerProvider.nextStep(result.Data.NextStep);
          }
        }
      ).catch(error => {
        this.alert.showErrorMessageAlert(error)
      })
    } else {
      await this.restApi.GetProfile(this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result != null) {
            this.isStillHold = false;
            this.dataTransaction.setProfile(result.Data);
            this.routerProvider.nextStep(result.Data.NextStep);
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        }
      )
    }
  }
}
