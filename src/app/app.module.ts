import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { CustomerListComponent } from './customerList.component';
import { CustomerComponent } from './customer.component';

import {HomeComponent } from './home.component';
import {JobsComponent } from './jobs.component';
import { CustomerNewComponent } from './customerNew.component';
import { AppRouterModule } from './app.route';
import{ HeaderComponent} from './header.component';
import{ ChildComponent} from './DAY4/child.component';
import{ AngularFormComponent} from './DAY4/angularForm.component';
import{ HeroForm} from './Hero Forms/hero-form.component';
import{ HeroDetailComponent1} from './Hero Forms/hero-detail.component';
import{ HeroDetailComponent2} from './Hero Forms/hero-detail.component2';
import{ HeroDetailComponent3} from './Hero Forms/hero-detail.component3';
import{ AngularFormReactiveComponent} from './DAY4/angularFormReactive.component';
import {SearchComponent} from './DAY5/search.component';
import {HighlightDirective} from './DAY5/highlight.directive'

import{SharedService} from './DAY5/shared.service';
import {LoginComponent} from './loginPage/login.component';

@NgModule({
  declarations: [//add all other components,directives,pipes here.
    AppComponent,
    WelcomeComponent,
    CustomerListComponent,
    CustomerComponent,
    CustomerNewComponent,
    JobsComponent,
    HomeComponent,
    HeaderComponent,
    ChildComponent,
    AngularFormComponent,
    HeroForm,
    HeroDetailComponent1,
    HeroDetailComponent3,
    HeroDetailComponent2,
    AngularFormReactiveComponent,
    SearchComponent,
    HighlightDirective,
    LoginComponent
  ],
  imports: [//this import in ng module tells angular about other angular
  // specific modules ,all these classes should be decorated with NgModule
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
