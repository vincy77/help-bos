import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HAnimationComponent } from './h-animation/h-animation.component';
import { HButtonComponent } from './h-button/h-button.component';
import { ShowcaseComponent } from './showcase.component';


const showcaseRoutes: Routes = [
  // {
  //   path: 'detail', component: ShowcaseComponent //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'button', component: HButtonComponent //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'form', component: HFormComponent //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'icon', component: HIconComponent //,canActivate:[NeedAuthGuard]
  // },
  // {
  //   path: 'table', component: HTableComponent //,canActivate:[NeedAuthGuard]
  // },
  {
    path: '', component: ShowcaseComponent //,canActivate:[NeedAuthGuard]
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
