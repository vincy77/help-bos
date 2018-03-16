import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleComponent } from './rule.component';

@NgModule({
  imports: [
    SharedModule,
    RuleRoutingModule
  ],
  declarations: [RuleComponent]
})
export class RuleModule { }
