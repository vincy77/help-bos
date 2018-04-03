import { Component, Injectable, Input, Output} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from './confirm/confirm.component';
import { AlertComponent } from './alert/alert.component';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { ConfirmConfig, AlertConfig, ToastType, ToastConfig, AlertType} from './my-modal-model';

@Injectable()
export class MyModalService {
  modalRef: BsModalRef;
  constructor(
    private bsModalService: BsModalService
  ) { }
  private toastSubject = new Subject<ToastConfig>();

  getToasts(): Observable<ToastConfig> {
    return this.toastSubject;
  }

  // tip提示框
  /**
   * 成功提示
   * */
  toastSuccess(info?:string,time?: number) {
    const toastConfig = new ToastConfig(ToastType.SUCCESS, info, time);
    this.toastSubject.next(toastConfig);
  }
  /**
   * 失败提示
  * */
  toastError(info?:string,time?: number) {
    const toastConfig = new ToastConfig(ToastType.ERROR, info, time);
    this.toastSubject.next(toastConfig);
  }
  /**
   * 默认提示
   * */
  toastInfo(info?:string,time?: number) {
    const toastConfig = new ToastConfig(ToastType.INFO, info, time);
    this.toastSubject.next(toastConfig);
  }
  /**
   * 警告提示
   * */
  toastWarning(info?:string,time?: number) {
    const toastConfig = new ToastConfig(ToastType.WARNING, info, time);
    this.toastSubject.next(toastConfig);
  }
  /**
   * 有确认按钮提示modal
   * */
  //错误框
  alertError(content: string, title?: string ): Promise<any>{
    const config = new AlertConfig(AlertType.ERROR, content, title);
    return this.modalEven(config, AlertComponent);
  }
  //成功框
  alertSuccess(content: string, title?: string ): Promise<any>{
    const config = new AlertConfig(AlertType.SUCCESS, content, title);
    return this.modalEven(config, AlertComponent);
  }
  //警告框
  alertWarning(content: string, title?: string ): Promise<any>{
    const config = new AlertConfig(AlertType.WARNING, content, title);
    return this.modalEven(config, AlertComponent);
  }
  //信息
  alertInfo(content: string, title?: string ): Promise<any>{
    const config = new AlertConfig(AlertType.INFO, content, title);
    return this.modalEven(config, AlertComponent);
  }
  // alertModal(type, content: string, title?: string ): Promise<any>{
  //   const config = new AlertConfig(type, content, title);
  //   console.log(config)
  //   return this.modalEven(config, AlertComponent);
  // }
  // 确认框
  confirmModal(content): Promise<any> {
    const config = new ConfirmConfig(content);
    return this.modalEven(config, ConfirmComponent);
  }
  modalEven(config, comp) {
    let promise = new Promise((resolve, reject) => {
      const initialState = {
        config: config
      };
      // 打开确认框
      this.modalRef = this.bsModalService.show(comp,
        Object.assign({},{backdrop: 'static'}, {initialState}));
      // 订阅确认框按钮事件
      this.modalRef.content.outputConfirm.subscribe(res => {
        handler(res);
        return res;
      });
      function handler(res) {
        if (res === 'Confirmed') {
          resolve(res);
        } else {
          reject(res);
        }
      };
    });

    console.log(promise);
    return promise;
  }

}
