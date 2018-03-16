import { Component, Injectable, Input, Output} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from './confirm/confirm.component';
import { AlertComponent } from './alert/alert.component';
import { ToastComponent } from './toast/toast.component';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { ConfirmConfig, AlertConfig, ToastType, ToastConfig} from './my-modal-model';

@Injectable()
export class MyModalService {
  modalRef: BsModalRef;
  constructor(
    private bsModalService: BsModalService
  ) { }
  // private subject = new Subject<any>();
  //
  // send(message: any) {
  //   this.subject.next(message);
  // }
  //
  // get(): Observable<any> {
  //   return this.subject.asObservable();
  // }
  private toastSubject = new Subject<ToastConfig>();

  getToasts(): Observable<ToastConfig> {
    return this.toastSubject;
  }


  toast(toastConfig: ToastConfig) {
    this.toastSubject.next(toastConfig);
  }
  //警告框
  alert(config:AlertConfig) {
    const initialState = {
      config: config
    };
    this.modalRef = this.bsModalService.show(AlertComponent, {initialState});
    this.modalRef.content.config = config;
    //return modalRef.result;
  }
  openModal(config:ConfirmConfig) {
    const initialState = {
      config: config
    };
    this.modalRef = this.bsModalService.show(ConfirmComponent, {initialState});
    console.log(this.modalRef)
    let type = this.modalRef.content.outputConfirm.subscribe(res => {
      console.log(res);
      return res;
    });
    return new Promise(
      function (resolve, reject) {
        if(type == 'Confirmed'){
          resolve('111');
        }else{
          reject('222')
        }
      });
    //this.modalRef.content.config = config;
    //this.modalRef.content.temp = this.modalRef;
    //console.log(this.modalRef);
    //return this.modalRef;
    // this.modalRef.content.outputConfirm.subscribe(
    //   (msg: string) => {
    //     console.log(msg);
    //     return msg;
    //   }
    // );
    //return this.bsModalService;

  }

}
