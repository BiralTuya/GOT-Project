import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { HousesComponent } from './pages/houses/houses.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HouseMemberComponent } from './pages/houses/house-member/house-member.component';
import { PeoplesDetailComponent } from './pages/peoples/peoples-detail/peoples-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
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
    // RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
