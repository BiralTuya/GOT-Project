import { Component } from '@angular/core';
// import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // constructor(private ngbNav: NgbNav) {}

  setActiveTab(tabId: string) {
    // this.ngbNav.activeId = tabId;
  } 
}
