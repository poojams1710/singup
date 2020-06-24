import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule, MDBBootstrapModule.forRoot(), BrowserAnimationsModule, MatSelectCountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
