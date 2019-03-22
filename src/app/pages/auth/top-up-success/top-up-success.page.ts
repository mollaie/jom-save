import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'
@Component({
  selector: 'app-top-up-success',
  templateUrl: './top-up-success.page.html',
  styleUrls: ['./top-up-success.page.scss'],
})
export class TopUpSuccessPage implements OnInit {

  constructor(private router:Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
   }

  ngOnInit() {
  }

  doNext(){
    this.router.navigate(['change-password'])
  }
}
