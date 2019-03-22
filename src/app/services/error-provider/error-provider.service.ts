import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { DataTransactionService } from './../../services/data-transaction/data-transaction.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorProviderService {

  constructor(
    private router: Router,
    private api: RestApiService,
    private dataTransaction: DataTransactionService,
  ) { }


  InvalidAccessToken(){

  }

}
