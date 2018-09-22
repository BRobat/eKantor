import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //Failed to load http://webtask.future-processing.com:8068/currencies: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:4200' is therefore not allowed access.
  // private currenciesURL: 'http://webtask.future-processing.com:8068/currencies';

  

  constructor(private http: Http) { }

  postCurrencies(currencies: any[]) {
    
  }

  getFunt() {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/gbp')
    .map(
      (response: Response) => {
        const bgp = response.json();
        for (const currency of bgp) {
          currency.name = 'FETCHED_' + currency.name;
        }
        return bgp;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  };


  getDollar() {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/usd')
    .map(
      (response: Response) => {
        const dol = response.json();
        return dol;
      }
    );
  };
  getEuro() {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/eur')
    .map(
      (response: Response) => {
        const eur = response.json();
        return eur;
      }
    );
  };
  getCzk() {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/czk')
    .map(
      (response: Response) => {
        const czk = response.json();
        return czk;
      }
    );
  };
  getRub() {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/rub')
    .map(
      (response: Response) => {
        const rub = response.json();
        return rub;
      }
    );
  };




}
