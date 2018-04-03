import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AlertConfig,AlertType} from '../my-modal-model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  config: AlertConfig;
  @Output() outputConfirm = new EventEmitter();


  constructor(public bsModalRef: BsModalRef) {}

  /**
   * 判断是否信息
   * @param type
   */
  isInfo(type) {
    return type === AlertType.INFO;
  }

  /**
   * 判断是否警告
   * @param type
   */
  isWarning(type) {
    return type === AlertType.WARNING;
  }

  /**
   * 判断是否错误
   * @param type
   */
  isError(type) {
    return type === AlertType.ERROR;
  }

  /**
   * 关闭
   */
  close(): void {
    this.bsModalRef.hide();
  }

  /**
   * 同意
   */
  approve(): void {
    this.bsModalRef.hide();
    event.stopPropagation();
    this.outputConfirm.next('Confirmed');
  }

  ngOnInit() {
  }

}
