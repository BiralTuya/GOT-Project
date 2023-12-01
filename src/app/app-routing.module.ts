import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  // { path: 'quotes/:id', component: QuotesComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'content', component: ContentComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
