import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/core/models/hero.model';

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
  private modalService:NgbActiveModal
  ) { }

  ngOnInit()
  : void {
    if(this.hero) this.initDetailsForm(this.hero)
    else this.initDetailsForm(new Hero())
  }


  private initDetailsForm(hero:Hero)
  : void{
    this.detailsForm=this.formBuilder.group({
      name:[hero.name,[Validators.required]],
      score:[hero.score,[Validators.required]]
    })
  }

  public onClose()
  : void {

    this.modalService.close();
  
  }

}
