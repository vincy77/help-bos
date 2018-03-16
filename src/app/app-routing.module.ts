import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {NotFoundComponent} from "./not-found/not-found.component";


const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/notfound',
      pathMatch: 'full'
    },
    {
        path:'rule',loadChildren:'./rule/rule.module#RuleModule'
    },
    {
        path:'showcase',loadChildren:'./showcase/showcase.module#ShowcaseModule'
    },
    {
      path:'plugin',loadChildren:'./plug-in/plug-in.module#PlugInModule'
    },
    {
      path:'api',loadChildren:'./h-api/h-api.module#HApiModule'
    },
    //angular2 官网的404路由配置有错，通过下面2行修正
    // {
    //     path:'nofound',loadChildren:'./nofound/nofound.module#NoFoundModule'
    // },
    {
      path: 'notfound', component: NotFoundComponent, data: { title: 'notfound' } // ,canActivate:[MyLoginService]
    },
    {
        path:'**',redirectTo:'/notfound'
    }
];


@NgModule({
    declarations: [
      NotFoundComponent
    ],
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
