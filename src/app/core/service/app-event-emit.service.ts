import { Injectable, EventEmitter, OnInit } from '@angular/core';
/**
 * app全局监听服务
 */
@Injectable()
export class AppEventEmitService implements OnInit {

  public categoryEventEmit: any;

  constructor() {
    // 获取分类编辑页面数据 发射事件
    this.categoryEventEmit = new EventEmitter();
  }

  ngOnInit() {

  }

}
