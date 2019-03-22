import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'
@Component({
  selector: 'app-mail-confirmed',
  templateUrl: './mail-confirmed.page.html',
  styleUrls: ['./mail-confirmed.page.scss'],
})
export class MailConfirmedPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doNext(){
      this.router.navigate(['complete-profile'])
  }
}
