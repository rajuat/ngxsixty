import { AppRoutingModule } from './router/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

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


const materialModules = [
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    CarouselModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
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

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
