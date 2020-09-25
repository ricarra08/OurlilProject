import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EMPhomeComponent } from './emphome/emphome.component';
import { DshomeComponent } from './dshome/dshome.component';
import { DhhomeComponent } from './dhhome/dhhome.component';
import { BchomeComponent } from './bchome/bchome.component';
import { TrfComponent } from './trf/trf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginMasterComponent } from './login-master/login-master.component';
import { LoginEmpPortalComponent } from './login-emp-portal/login-emp-portal.component';
import { LoginDsComponent } from './login-ds/login-ds.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EMPhomeComponent,
    DshomeComponent,
    DhhomeComponent,
    BchomeComponent,
    TrfComponent,
    LoginMasterComponent,
    LoginEmpPortalComponent,
    LoginDsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
