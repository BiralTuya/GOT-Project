import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './pages/houses/houses.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { PeoplesDetailComponent } from './pages/peoples/peoples-detail/peoples-detail.component';
import { HouseMemberComponent } from './pages/houses/house-member/house-member.component';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'house/:slug', component: HouseMemberComponent },
  { path: 'people/:slug', component: PeoplesDetailComponent },
  { path: '', redirectTo: 'houses', pathMatch: 'full' },
  { path: '**', redirectTo: 'houses', pathMatch: "full"} // Default route
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
export class AppRoutingModule {
  
 }
