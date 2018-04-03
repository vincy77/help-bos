import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ConfirmConfig} from '../my-modal-model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input()
  config: ConfirmConfig;
  @Output() outputConfirm = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  confirm(): void {
    this.bsModalRef.hide();
    event.stopPropagation();
    this.outputConfirm.next('Confirmed');
    //this.modalRef.content.hide();
    //this.outputConfirm.next(event);

  }

  decline(): void {
    this.bsModalRef.hide();
    event.stopPropagation();
    this.outputConfirm.next('Declined');
  }
  ngOnInit() {
    console.log(this.config);
  }

}
