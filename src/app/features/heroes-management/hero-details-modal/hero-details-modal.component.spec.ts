import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsModalComponent } from './hero-details-modal.component';

describe('HeroDetailsModalComponent', () => {
  let component: HeroDetailsModalComponent;
  let fixture: ComponentFixture<HeroDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
