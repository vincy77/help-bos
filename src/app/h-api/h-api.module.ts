import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HApiRoutingModule } from './h-api-routing.modult';
import { HApiComponent } from './h-api.component';

@NgModule({
  imports: [
    SharedModule,
    HApiRoutingModule
  ],
  declarations: [HApiComponent]
})
export class HApiModule { }
