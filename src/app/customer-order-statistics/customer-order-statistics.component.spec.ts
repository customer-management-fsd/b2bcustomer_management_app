import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderStatisticsComponent } from './customer-order-statistics.component';

describe('CustomerOrderStatisticsComponent', () => {
  let component: CustomerOrderStatisticsComponent;
  let fixture: ComponentFixture<CustomerOrderStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
