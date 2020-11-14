import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HeroesListingComponent } from './heroes-listing/heroes-listing.component';

// Core
import { HeroResolver } from '../../core/resolvers/hero.resolver';

const routes: Routes = [
  {
    path:"",
    component:HeroesListingComponent,
    resolve:{
      heroes:HeroResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[HeroResolver]
})
export class HeroesManagementRoutingModule { }
