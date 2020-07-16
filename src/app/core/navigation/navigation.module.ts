import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    ReactiveFormsModule
  ]
})
export class NavigationModule { }
