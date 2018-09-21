import { CurrencyService } from './services/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private currencyService: CurrencyService) {
    this.onGet()
  }

  onGet() {
    this.currencyService.getCurrencies().subscribe(
      (response) => console.log("response",response),
      (error) => console.log(error)
    )
  }
  
}
