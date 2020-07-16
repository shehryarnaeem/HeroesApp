import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Hero } from 'src/app/core/models/hero.model';
import { HeroesManagementService } from 'src/app/core/http-services/heroes-management/heroes-management.service';

@Component({
  selector: 'app-hero-details-modal',
  templateUrl: './hero-details-modal.component.html',
  styleUrls: ['./hero-details-modal.component.css']
})
export class HeroDetailsModalComponent implements OnInit {

  @Input()
  hero?:Hero

  detailsForm:FormGroup;

  constructor(
  private formBuilder:FormBuilder,
  private modalService:NgbActiveModal,
  private heroService:HeroesManagementService
  ) { }

  ngOnInit()
  : void {

    if(this.hero) this.initDetailsForm(this.hero)
    else this.initDetailsForm(new Hero())

  }


  private get detailsFormValue()
  : Hero {

    return this.detailsForm.value;
  
  }


  public get detailsFormControl()
  : any {
    
    return this.detailsForm.controls

  }


  private initDetailsForm(hero:Hero)
  : void{

    this.detailsForm = this.formBuilder.group({
      name:[hero.name,[Validators.required]],
      score:[hero.score,[Validators.required,Validators.pattern(/^[-+]?[0-9]+$/)]]
    })

  }


  public onClose(status?:boolean)
  : void {

    this.modalService.close(status);
  
  }


  public onSave()
  : void {
    
    if(this.detailsForm.invalid) return

    if(this.hero) this.editHero()
    else this.saveHero(this.detailsForm.value as Hero)
    this.onClose(true);

  }


  private editHero()
  : void {

    this.hero.name = this.detailsFormValue.name
    this.hero.score = this.detailsFormValue.score;
    this.heroService.editHero(this.hero);

  }

  private saveHero(hero:Hero)
  : void {

    this.heroService.addNewHero(hero);

  }


}
