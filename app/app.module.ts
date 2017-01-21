import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ImportService } from './import.service';


import { AppComponent }  from './app.component';
//import { klItemComponent } from './kl.item';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent ],
  providers:    [ImportService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
