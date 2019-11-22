import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsStatisticsComponent } from './months-statistics.component';

describe('MonthsStatisticsComponent', () => {
  let component: MonthsStatisticsComponent;
  let fixture: ComponentFixture<MonthsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
