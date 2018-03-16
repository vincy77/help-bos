import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { Api22Component } from './api22/api22.component';
import { HApiComponent } from './h-api.component';


const hapiRoutes: Routes = [
  // {
  //   path: 'api1', component: Api1Component //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'api2', component: Api2Component //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'api22/:id', component: Api22Component //,canActivate:[NeedAuthGuard]
  // },
  {
    path: '', component: HApiComponent //,canActivate:[NeedAuthGuard]
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
