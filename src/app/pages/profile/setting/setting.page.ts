import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  
  constructor(
    private router : Router,
    private dataTransaction: DataTransactionService,
  ) { }

  ngOnInit() {
  }

  AccountInformation(){
    this.router.navigateByUrl('profile/profile/menu/account-information');
  }

  ChangePassword(){
    this.router.navigateByUrl('profile/profile/menu/change-password');
  }

  BankInformation(){
    this.router.navigateByUrl('profile/profile/menu/bank-information');
  }

  ChangeNumber(){
    this.router.navigateByUrl('profile/profile/menu/change-number');
  }
}
