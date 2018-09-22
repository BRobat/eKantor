import { CurrencyService } from './services/currency.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './comonents/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrenciesComponent,
    WalletComponent,
    ContainerComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "container", component: ContainerComponent},
      {path: "edit", component: EditComponent},
      {path: "login", component: LoginComponent}
      
    ])
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
