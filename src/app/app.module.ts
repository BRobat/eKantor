import { CurrencyService } from './services/currency.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrenciesComponent,
    WalletComponent,
    ContainerComponent,
    LoginComponent,
    EditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,  
    RouterModule.forRoot([
      {path: "container", component: ContainerComponent},
      {path: "edit", component: EditComponent},
      {path: "login", component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      
    ])
  ],
  providers: [CurrencyService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
