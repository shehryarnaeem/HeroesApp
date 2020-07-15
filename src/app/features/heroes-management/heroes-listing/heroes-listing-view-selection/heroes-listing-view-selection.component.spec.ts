import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingViewSelectionComponent } from './heroes-listing-view-selection.component';

describe('HeroesListingViewSelectionComponent', () => {
  let component: HeroesListingViewSelectionComponent;
  let fixture: ComponentFixture<HeroesListingViewSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListingViewSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListingViewSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
