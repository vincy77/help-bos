import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmComponent } from './confirm/confirm.component';
import { MyModalService } from './my-modal.service';
import { AlertComponent } from './alert/alert.component';
// import { ToastBoxComponent } from './toast-box/toast-box.component';
// import { ToastComponent } from './toast/toast.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    MyModalService
  ],
  declarations: [
    ConfirmComponent,
    AlertComponent,
    // ToastComponent,
    // ToastBoxComponent
  ],
  entryComponents:[
   ConfirmComponent,
    AlertComponent,
    // ToastComponent
  ]
})
export class ModalModule { }
