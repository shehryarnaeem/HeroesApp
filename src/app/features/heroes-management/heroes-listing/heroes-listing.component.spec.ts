import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingComponent } from './heroes-listing.component';

describe('HeroesListingComponent', () => {
  let component: HeroesListingComponent;
  let fixture: ComponentFixture<HeroesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
