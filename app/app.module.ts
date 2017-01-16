import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routes} from './app.router';


import {BitDataComponent} from './bitdata.component';
import {AboutComponent} from './about.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,routes],
  declarations: [ AppComponent,BitDataComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
  
  
})
export class AppModule { }
