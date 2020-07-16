import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';


const routes: Routes = [
  {
    path:"",
    component:NavigationComponent,
    children:[
      {
        path:"",
        loadChildren:()=>
        import("../../features/heroes-management/heroes-management.module").then(
          (m:any)=>m.HeroesManagementModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
