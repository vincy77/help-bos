import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RuleComponent } from './rule.component';
import {NeedAuthGuard} from "../core/service/no-auth-guard.service";


const ruleRoutes: Routes = [
  {
    path: '', component: RuleComponent, canActivate:[NeedAuthGuard]
  }
];


@NgModule({
  imports:[
    RouterModule.forChild(ruleRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class RuleRoutingModule{

}
