import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesDetailComponent } from './peoples-detail.component';

describe('PeoplesDetailComponent', () => {
  let component: PeoplesDetailComponent;
  let fixture: ComponentFixture<PeoplesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesDetailComponent]
    });
    fixture = TestBed.createComponent(PeoplesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
