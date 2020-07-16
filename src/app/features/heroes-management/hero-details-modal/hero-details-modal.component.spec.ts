import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsModalComponent } from './hero-details-modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';

describe('HeroDetailsModalComponent', () => {
  let component: HeroDetailsModalComponent;
  let fixture: ComponentFixture<HeroDetailsModalComponent>;

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
    fixture.detectChanges();
  });

  it('should create Hero Details Modal', () => {
    expect(component).toBeTruthy();
  });
});
