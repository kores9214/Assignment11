import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportCenterComponent } from './customer-support-center.component';

describe('CustomerSupportCenterComponent', () => {
  let component: CustomerSupportCenterComponent;
  let fixture: ComponentFixture<CustomerSupportCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSupportCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupportCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
