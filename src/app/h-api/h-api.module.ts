import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HApiRoutingModule } from './h-api-routing.modult';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { Api22Component } from './api22/api22.component';
import { HApiComponent } from './h-api.component';

@NgModule({
  imports: [
    SharedModule,
    HApiRoutingModule
  ],
  declarations: [Api1Component, Api2Component, Api22Component, HApiComponent]
})
export class HApiModule { }
