import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PluginRoutingModule } from './plug-in-routing.module';
import { PlugInComponent } from './plug-in.component';

@NgModule({
  imports: [
    SharedModule,
    PluginRoutingModule
  ],
  declarations: [PlugInComponent]
})
export class PlugInModule { }
