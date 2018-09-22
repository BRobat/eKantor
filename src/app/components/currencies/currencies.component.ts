import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent{

  currencies: any[];

  constructor(private currencyService: CurrencyService) {
    this.onGet();
   }

  onGet() {
    this.currencies = [
    this.currencyService.getFunt(),
    this.currencyService.getDollar(),
    this.currencyService.getEuro(),
    this.currencyService.getCzk(),
    this.currencyService.getRub()
    ]
    console.log(this.currencies);
  }

}
