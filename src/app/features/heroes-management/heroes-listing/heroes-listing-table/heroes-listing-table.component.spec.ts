import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingTableComponent } from './heroes-listing-table.component';

describe('HeroesListingTableComponent', () => {
  let component: HeroesListingTableComponent;
  let fixture: ComponentFixture<HeroesListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
