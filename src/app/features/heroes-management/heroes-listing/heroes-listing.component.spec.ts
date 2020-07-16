import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListingComponent } from './heroes-listing.component';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';

describe('HeroesListingComponent', () => {
  let component: HeroesListingComponent;
  let fixture: ComponentFixture<HeroesListingComponent>;
  let element:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListingComponent ],
      imports:[
        NgbModule,
        NgbNavModule
      ],
      providers:[
        HeroesManagementService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListingComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement
    fixture.detectChanges();
  });


  it('should create Heroes Listing', () => {
    expect(component).toBeTruthy();
  });


  it("Display View Options For Heroes Listing",()=>{
    let retrievedOptions:NodeList = element.querySelectorAll("li")
    let options:string[] = ["Dashboard","Table"]
    
    expect(retrievedOptions.length).toBe(2);

    for(let i = 0; i < options.length ; i++){
      
      expect(retrievedOptions[i].textContent)
      .toBe(options[i]);

    }

  })

  


});
