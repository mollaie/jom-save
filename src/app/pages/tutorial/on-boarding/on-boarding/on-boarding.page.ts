import { Component, OnInit } from '@angular/core';
import { DataTransactionService } from '../../../../services/data-transaction/data-transaction.service'
@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };
  constructor(
    private data : DataTransactionService
  ) { }

  ngOnInit() {
  }

  doStart() {
    this.data.setOnBoard();
  }

}
