import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingDashboardComponent } from './heroes-listing-dashboard.component';
import { By } from '@angular/platform-browser';

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

  it('should create Hero Listing Dashboard', () => {
    
    expect(component)
    .toBeTruthy();

  });

  it("should render Top Hero List",() => {

    let cardList:any[] = fixture.debugElement.queryAll(By.css(".hero_card"))

    expect(cardList.length)
    .toBe(component.heroes.length);

  })

});
