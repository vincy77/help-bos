import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ConfirmConfig} from '../my-modal-model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {
  //@Input()
  config: ConfirmConfig;
  //@Input() temp;
  //@Input() status;
  @Output() outputConfirm = new EventEmitter();


  message: string;
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  confirm(): void {
    this.message = 'Confirmed!';
    console.log(this.config);
    //console.log(this.temp);
    this.bsModalRef.hide();
    event.stopPropagation();
    this.outputConfirm.next(this.message);
    //this.modalRef.content.hide();
    //this.outputConfirm.next(event);

  }

  decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
  }
  ngOnInit() {
    console.log(this.config);
  }

}
