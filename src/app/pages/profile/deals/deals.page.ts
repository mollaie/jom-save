import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {


  Deals=[
    {
      Id:0,
      Date:'10 Jan 2019',
      Time: '10:00',
      Title : 'Very Good News',
      Description : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
    },
    {
      Id:0,
      Date:'10 Jan 2019',
      Time: '10:00',
      Title : 'Very Good News',
      Description : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
    },    {
      Id:0,
      Date:'10 Jan 2019',
      Time: '10:00',
      Title : 'Very Good News',
      Description : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
