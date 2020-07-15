import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';


const routes: Routes = [
  {
    path:"",
    component:HeroesListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesManagementRoutingModule { }
