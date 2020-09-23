import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EMPhomeComponent } from './emphome/emphome.component';
import { DshomeComponent } from './dshome/dshome.component';
import { DhhomeComponent } from './dhhome/dhhome.component';
import { BchomeComponent } from './bchome/bchome.component';
import { TrfComponent } from './trf/trf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EMPhomeComponent,
    DshomeComponent,
    DhhomeComponent,
    BchomeComponent,
    TrfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
