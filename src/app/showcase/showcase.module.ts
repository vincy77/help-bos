import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { HAnimationComponent } from './h-animation/h-animation.component';
import { HButtonComponent } from './h-button/h-button.component';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  imports: [
    SharedModule,
    ShowcaseRoutingModule
  ],
  declarations: [HAnimationComponent, HButtonComponent, ShowcaseComponent]
})
export class ShowcaseModule { }
