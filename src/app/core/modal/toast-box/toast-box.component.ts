import { Component, OnInit, Input } from '@angular/core';
import { ToastConfig } from '../my-modal-model';
import { MyModalService } from '../my-modal.service';
import { toastAnimation } from '../toasr-box-animate';
@Component({
  selector: 'app-toast-box',
  templateUrl: './toast-box.component.html',
  animations: [ toastAnimation ],
  styleUrls: ['toast-box.component.scss']
})
export class ToastBoxComponent implements OnInit {

  @Input() toastAnimation: string = 'none';
  @Input() toastPosition: string = 'c-toast-top-center';

  private toastConfigs: Array<ToastConfig> = [];

  constructor(private myModalService: MyModalService) {
    /**
     * 获取页面上存在的toast，默认 0
     * */
    this.myModalService.getToasts().forEach((config: ToastConfig) => {
      this.toastConfigs.unshift(config);
    });
  }
  ngOnInit() {
  }
  /**
   * 获得所有toast配置
   */
  getToastConfigs(): Array<ToastConfig>  {
    return this.toastConfigs;
  }

  /**
   * 移除
   * @param toastCfg
   */
  remove(toastCfg: ToastConfig) {
    if(this.toastConfigs.indexOf(toastCfg) >= 0) {
      this.toastConfigs.splice(this.toastConfigs.indexOf(toastCfg), 1);
    }
  }
}
