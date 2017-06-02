import { AppRoutingModule } from './router/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule, MdButtonModule } from '@angular/material';

import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { DietComponent } from './diet/diet.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CrossfitComponent } from './crossfit/crossfit.component';
import { HeaderService } from "app/header/header.service";


const materialModules = [
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdCardModule,
  MdGridListModule,
  MdButtonModule
];


export const firebaseConfig = {
  apiKey: "AIzaSyCSH7Mki02atIRZpPad873adWlYbgZwpOw",
  authDomain: "x-sixty.firebaseapp.com",
  databaseURL: "https://x-sixty.firebaseio.com",
  projectId: "x-sixty",
  storageBucket: "x-sixty.appspot.com",
  messagingSenderId: "379360347057"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    CarouselModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
  ].concat(materialModules),

  declarations: [
    AppComponent,
    AboutUsComponent,
    WhyUsComponent,
    DietComponent,
    ScheduleComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    CrossfitComponent
  ],

  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
