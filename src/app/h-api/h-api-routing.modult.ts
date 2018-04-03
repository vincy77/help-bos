import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {NeedAuthGuard} from "../core/service/no-auth-guard.service";
import { HApiComponent } from './h-api.component';

const hapiRoutes: Routes = [
  {
    path: '', component: HApiComponent, canActivate:[NeedAuthGuard]
  }
];


@NgModule({
  imports:[
    RouterModule.forChild(hapiRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class HApiRoutingModule{

}
