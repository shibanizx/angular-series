import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'


import { AppComponent } from './app.component';
import { ShowModule } from './show/show.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
