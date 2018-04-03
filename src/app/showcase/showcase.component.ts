import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowcaseService } from './showcase.service';
import { Router, ActivatedRoute} from '@angular/router';
import { AppEventEmitService } from '../core/service/app-event-emit.service';
import { categoryData } from './showcase-model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MyModalService } from '../core/modal/my-modal.service';
import { ConfirmConfig, AlertConfig, AlertType, ToastConfig, ToastType } from '../core/modal/my-modal-model';
import {log} from "util";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  // toastConfigs: Array<ToastConfig> = [];
  @ViewChild('newCaseTemplate') newCaseTemplate: ElementRef;
  data = {};
  categoryData = {
    list: []
  };
  caseDataList = [];
  caseData = {
    id: ''
  };
  template = [
    {
      key: 'type1',
      value: 'type1'
    },
    {
      key: 'type2',
      value: 'type2'
    }
  ]
  modalRef: BsModalRef;
  constructor(
    private showcaseService: ShowcaseService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private myModalService: MyModalService,
    private appEventEmitService: AppEventEmitService
  ) { }
  /**
  * 新增实例弹窗
  * */
  isEdit = false;
  newCase(temp) {
    console.log(temp);
    if(temp) {
      this.isEdit = true;
      this.caseData = temp;
    }else{
      this.caseData = {
        id: ''
      };
      this.isEdit = false;
    }
    this.modalRef = this.modalService.show(this.newCaseTemplate,
      Object.assign({},{backdrop: 'static'}, {class: 'modal-lg new-case-modal'}));
  }
  /**
   * 保存新增实例数据
   * */
  saveCaseData(): void {
    console.log(this.caseData);
    // 保存成功需要返回唯一标志（id），编辑的时候需要用到
    if(this.isEdit) {
      this.myModalService.toastSuccess('编辑成功！');
      this.categoryData.list.forEach(item => {
        if(item.id == this.caseData.id){
          item = this.caseData;
        }
      })
    }else{
      this.myModalService.toastSuccess('保存成功！');
      this.categoryData.list.push(this.caseData);
    }
    this.modalRef.hide();
  }
  /**
   * 删除实例
   * */
  deleteCase(item) {
    this.myModalService.confirmModal('确定删除该实例吗！')
      .then((res) => {
        console.log(res);
        console.log(item);
        this.categoryData.list = this.categoryData.list.filter(i => {
          return i.id !== item.id;
        })
      }, (r) => {
        console.log(r);
      });
  }
  /**
   * 关闭新增实例弹窗
   * */
  decline(): void {
    this.modalRef.hide();
  }
  /**
   * 获取分类实例数据
   * */
  getCategoryView(data: any) {
    this.showcaseService
      .getCategoryData(data.id)
      .then(res => {
        this.categoryData = res;
        //return this.categoryData;
      });
    console.log(this.categoryData);
  }
  toast() {
    this.myModalService.toastSuccess('这是一条INFO消息');
  }
  openAlert() {
    this.myModalService.alertInfo('这是一条Error消息')
    // this.myModalService.alertModal('INFO', '这是一条WARNING消息32').then((res) => {
    //   console.log('cccccom');
    //   log(res);
    // })
  }
  openConfirm() {
    //const confirmConfg = new ConfirmConfig('您打开了一个确认框11111！');
    this.myModalService.confirmModal('您打开了一个确认框11111！')
      .then((res) => {
      console.log(res);
    }, (r) => {
      console.log(r);
    });
  }
  ngOnInit() {
    this.appEventEmitService.categoryEventEmit.subscribe((res) => {
      this.getCategoryView(res);
    })
  }

}
