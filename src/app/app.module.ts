import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { HousesComponent } from './pages/houses/houses.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HouseMemberComponent } from './pages/houses/house-member/house-member.component';
import { PeoplesDetailComponent } from './pages/peoples/peoples-detail/peoples-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    PeoplesComponent,
    QuotesComponent,
    HouseMemberComponent,
    PeoplesDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
