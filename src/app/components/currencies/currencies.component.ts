import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent{

  funt: any[];
  dollar: any[];
  euro: any[];
  czk: any[];

  currencies: any[];

  constructor(private currencyService: CurrencyService) {
    this.onGet();
   }

  onGet() {
    this.currencies = [
    this.currencyService.getFunt(),
    this.currencyService.getDollar(),
    this.currencyService.getEuro(),
    this.currencyService.getCzk()
    ]
    console.log(this.currencies);
  }

}
