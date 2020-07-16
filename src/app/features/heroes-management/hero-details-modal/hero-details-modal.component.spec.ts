import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeroDetailsModalComponent } from './hero-details-modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';
import { By } from '@angular/platform-browser';

describe('HeroDetailsModalComponent', () => {
  let component: HeroDetailsModalComponent;
  let fixture: ComponentFixture<HeroDetailsModalComponent>;
  let element:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsModalComponent ],
      imports:[
        
      ],
      providers:[
        FormBuilder,
        NgbActiveModal,
        HeroesManagementService
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsModalComponent);
    component = fixture.componentInstance;
    element =  fixture.nativeElement;
    fixture.detectChanges();
  });


  it('Hero Details Modal should be created', () => {
    expect(component).toBeTruthy();
  });


  it("Modal Title Rendered",() => {
    let title:Element = element.querySelector(".modal-title")

    expect(title.textContent)
    .toBe("Details")

  })


  it("Details Form Test",() =>{

    let saveButtonText:string = element.querySelector(".save_button").textContent
    expect(saveButtonText)
    .toBe("Save");

    component.detailsFormControl["name"].setValue("");
    component.detailsFormControl["score"].setValue("");

    expect(component.detailsForm.invalid)
    .toBeTruthy()

    let saveBtn = fixture.debugElement.nativeElement
    .querySelector(".save_button")

    expect(saveBtn.disabled)
    .toBeTruthy();
    
    component.detailsFormControl["name"].setValue("Iron Man");
    component.detailsFormControl["score"].setValue("100")

    expect(component.detailsForm.valid)
    .toBeTruthy()

    component.detailsFormControl["name"].setValue("Iron Man");
    component.detailsFormControl["score"].setValue("text input");

    expect(component.detailsForm.invalid)
    .toBeTruthy()
    
    expect(saveBtn.disabled)
    .toBeTruthy();

  })


  it("Button should close modal",fakeAsync(()=>{
    spyOn(component,"onClose");

    let closeButton = fixture.debugElement.nativeElement
    .querySelector(".close")
    closeButton.click();

    tick();
    expect(component.onClose)
      .toHaveBeenCalled();

  }))

});
