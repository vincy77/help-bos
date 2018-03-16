import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RuleComponent } from './rule.component';


const ruleRoutes: Routes = [
  // {
  //   path: 'api1', component: Api1Component //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'api2', component: Api2Component //,canActivate:[NeedAuthGuard]
  // },
  {
    path: '', component: RuleComponent //,canActivate:[NeedAuthGuard]
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
