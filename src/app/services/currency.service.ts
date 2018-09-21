import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  

  constructor(private http: Http) { }

  postCurrencies(currencies: any[]) {
    
  }

  getCurrencies() {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Vary': 'Origin',
      'Accept': 'application/json'
    });
    return this.http.get("https://firebase.google.com/support/privacy/", {headers: headers});
  }


}
