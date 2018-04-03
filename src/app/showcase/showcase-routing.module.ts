import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

//import { HButtonComponent } from './h-button/h-button.component';
import { ShowcaseComponent } from './showcase.component';
import {NeedAuthGuard} from "../core/service/no-auth-guard.service";


const showcaseRoutes: Routes = [
  {
    path: '', component: ShowcaseComponent, canActivate:[NeedAuthGuard]
  }
];


@NgModule({
  imports:[
    RouterModule.forChild(showcaseRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class ShowcaseRoutingModule{

}
