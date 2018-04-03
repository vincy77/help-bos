import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PlugInComponent } from './plug-in.component';
import {NeedAuthGuard} from "../core/service/no-auth-guard.service";

const pluginRoutes: Routes = [
  {
    path: '', component: PlugInComponent, canActivate:[NeedAuthGuard]
  }
];


@NgModule({
  imports:[
    RouterModule.forChild(pluginRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class PluginRoutingModule{

}
