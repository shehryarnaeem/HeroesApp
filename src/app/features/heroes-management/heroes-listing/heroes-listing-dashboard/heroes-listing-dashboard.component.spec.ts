import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingDashboardComponent } from './heroes-listing-dashboard.component';

describe('HeroesListingDashboardComponent', () => {
  let component: HeroesListingDashboardComponent;
  let fixture: ComponentFixture<HeroesListingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
