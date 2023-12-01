import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HousesComponent } from './houses/houses.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HousesComponent,
    PeoplesComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    // RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
