import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  routerSubscription: any;
  showSplash: boolean = true;
  isClicked : boolean = false;

  constructor(
    private router: Router ,
    private data : DataTransactionService
  ) {

    setTimeout(() => {
      this.showSplash = false;
    }, 500);

    this.routerSubscription = this.router.events.subscribe(
      (e: NavigationEnd) => {
        if(this.data.shouldNavigate){
          if (e instanceof NavigationEnd) {
            if(e.url != "/profile/profile/menu" && this.isClicked){
              this.isClicked = false;
              this.router.navigateByUrl('profile/profile/menu')
            }
          }
        }
  
      }
    )
  }

  ngOnInit() {
  }

  onClick(event){
    this.data.shouldNavigate = true;
    this.isClicked = true;
  }

  onOtherPageClick(event){
    this.data.page = 1;
    this.data.shouldNavigate = false;
  }
}
