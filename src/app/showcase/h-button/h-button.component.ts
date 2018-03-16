import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MyModalService } from '../../core/modal/my-modal.service';

import { ConfirmConfig, AlertConfig, AlertType, ToastConfig, ToastType } from '../../core/modal/my-modal-model';

import { MyAlertComponent } from '../../core/my-alert/my-alert.component';
import { MyAlertService } from '../../core/my-alert.service';

@Component({
  selector: 'app-h-button',
  templateUrl: './h-button.component.html',
  styleUrls: ['h-button.component.less']
})
export class HButtonComponent implements OnInit {
  //modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private myAlertService: MyAlertService,
    private myModalService: MyModalService
  ) { }
  successMsg() {
    this.myAlertService.successMsg('添加成功！');
  }
  warnMsg() {
    this.myAlertService.warnMsg('warnMsg！');
  }
  errorMsg() {
    this.myAlertService.errorMsg('errorMseg！');
  }
  confirmDialog() {
    let that = this;
    that.myAlertService.confirmDialog('添加成功！', function () {
      that.myAlertService.warnMsg('click confirm！');
    });
  }
  confirmDialog2(temp) {
    this.modalService.show(MyAlertComponent);

  }
  // openConfirm() {
  //   const confirmCfg = new ConfirmConfig('您打开了一个确认框！');
  //   this.myModalService.openModal(confirmCfg);
  // }
  toast() {
    const toastCfg = new ToastConfig(ToastType.INFO,'','这是一条INFO消息!', 30000);
    this.myModalService.toast(toastCfg);
  }
  openAlert() {
    const alertCfg = new AlertConfig(AlertType.WARNING, '标题', '这是一条WARNING消息!');
    this.myModalService.alert(alertCfg);
  }
  openConfirm() {
    const confirmConfg = new ConfirmConfig('您打开了一个确认框！');
    this.myModalService.openModal(confirmConfg).then((res) => {
      console.log(res);
    }, (r) => {
      console.log(r);
    })
    //   .then((result) => {
    //   console.log(result);
    //   console.log('confirm');
    // }, (reason) => {
    //   console.log(reason);
    //   console.log('cancel');
    // });
    console.log(this.modalService);
  }
  ngOnInit() {
  }

}
