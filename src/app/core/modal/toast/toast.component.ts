import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastConfig, ToastType } from '../my-modal-model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['toast.component.scss']
})
export class ToastComponent implements OnInit {
  dismissible = true;
  @Input() config = new ToastConfig(ToastType.ERROR);

  @Output() dismissed = new EventEmitter();

  constructor() {

  }
  // classObject;
  ngOnInit() {
    //自动关闭
    if (this.config.isAutoDismissing()) {
      setTimeout(() => this.dismiss(), this.config.getAutoDismissTime());
    }
  }
  /**
   * 判断是成功
   */
  isSuccess() {
    //
    return this.config.getToastType() === ToastType.SUCCESS;
  }

  //SUCCESS, INFO, WARNING, ERROR
  /**
   * 判断是信息
   */
  isInfo() {
    return this.config.getToastType() === ToastType.INFO;
  }

  /**
   * 判断是警告
   */
  isWarning() {
    return this.config.getToastType() === ToastType.WARNING;
  }

  /**
   * 判断是错误
   */
  isError() {
    return this.config.getToastType() === ToastType.ERROR;
  }

  /**
   * 解除
   */
  dismiss() {
    this.dismissed.emit();
  }

  /**
   * 是否启用
   */
  isDismissEnabled() {
    return this.config.isDismissable();
  }

  // alerts: any[] = [];
  //
  // add(): void {
  //   this.alerts.push({
  //     type: 'info',
  //     msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
  //     timeout: 5000
  //   });
  // }
  //
  // onClosed(dismissedAlert: AlertComponent): void {
  //   this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  // }
  // ngOnInit() {
  //   this.srv.get().subscribe((result) => {
  //     this.message = result;
  //   })
  // }

}
