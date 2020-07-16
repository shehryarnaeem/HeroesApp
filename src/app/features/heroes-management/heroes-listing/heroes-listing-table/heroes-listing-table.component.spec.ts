import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroesListingTableComponent } from './heroes-listing-table.component';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';

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
    component.ngOnInit()
    fixture.detectChanges();

  });

  it('Heroes Listing Tables should be created', () => {
    
    expect(component)
    .toBeTruthy();

  });


  it("Add function called",fakeAsync(() => {

    spyOn(component,"onAdd");

    let addButton = fixture.debugElement.nativeElement
    .querySelector("#addButton")

    addButton.click();

    tick();
    expect(component.onAdd)
    .toHaveBeenCalled();

  }))

  it("should render heroes list",() => {

    let heroService:HeroesManagementService = TestBed.inject(HeroesManagementService)
    component.heroes = heroService.heroes;
    fixture.detectChanges();

    let rowList = fixture.debugElement.queryAll(By.css("tr"))
    
    expect(rowList.length)
    .toEqual(component.heroes.length);

  })


  it("should call onEdit on Edit Button clicked",fakeAsync(()=>{

    let heroService:HeroesManagementService = TestBed.inject(HeroesManagementService)
    component.heroes = heroService.heroes;
    fixture.detectChanges();

    let editButtonList:any[] = fixture.debugElement.nativeElement.querySelectorAll("#editButton");

    expect(editButtonList.length).toBe(component.heroes.length)

    spyOn(component,"onEdit");

    if(editButtonList.length>0) {

      editButtonList[0].click()

      tick();
      expect(component.onEdit)
      .toHaveBeenCalled();

    }

  }))


  it("should call onDelete on Delete Button clicked",fakeAsync(()=>{

    let heroService:HeroesManagementService = TestBed.inject(HeroesManagementService)
    component.heroes = heroService.heroes;
    fixture.detectChanges();

    let deleteButtonList:any[] = fixture.debugElement.nativeElement.querySelectorAll("#deleteButton");

    expect(deleteButtonList.length).toBe(component.heroes.length)

    spyOn(component,"onDelete");

    if(deleteButtonList.length>0) {

      deleteButtonList[0].click()

      tick();
      expect(component.onDelete)
      .toHaveBeenCalled();

    }

  }))




});
