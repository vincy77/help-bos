import {
  Component, Injectable, OnInit, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy, Input, Output
} from '@angular/core';
import { MyAlertComponent } from './my-alert/my-alert.component';
import { ConfirmComponent } from './modal/confirm/confirm.component';



@Injectable()
export class MyAlertService {
  componentRef: ComponentRef<MyAlertComponent>; //加载的组件实例
  ccc: ComponentRef<ConfirmComponent>;
  // ViewChild：属性装饰器，通过它可以获得视图上对应的元素；
  // ViewContainerRef：视图容器，可在其上创建、删除组件；
  // ComponentFactoryResolver：组件解析器，可以将一个组件呈现在另一个组件的视图上。
  @ViewChild('', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}
  template;
  // 在appComponent中调用该方法初始化 template模版（是否有别的方法，该服务中无法获取组件中设置的模版变量）
  getTemplate(temp) {
    this.template = temp;
  }
  // 成功信息弹出窗
  successMsg(message: string) {
    this.createComponent(message, 'success');
    this.closeDialog();
  }
  // 警告信息弹出窗
  warnMsg(message: string) {
    this.createComponent(message, 'warn');
    this.closeDialog();
  }
  // 失败信息弹出窗
  errorMsg(message: string) {
    this.createComponent(message, 'error');
    this.closeDialog();
  }
  // 确认框
  confirmDialog(message: string, fun) {
    this.createComponent(message, 'confirm');
    console.log(this.ccc);
    console.log(this.componentRef);
    console.log(this.componentRef.instance.outputConfirm);
    this.componentRef.instance.outputConfirm.subscribe(
      (msg: string) => {
        console.log(msg);
        this.ngOnDestroy();
        fun();
        return msg;
      }
    );
    this.closeDialog();
  }
  // 动态插入信息弹出窗
  createComponent(message: string, type: string) {
    this.container = this.template;
    console.log(this.container);
    this.container.clear();
    const factory: ComponentFactory<MyAlertComponent> =
      this.resolver.resolveComponentFactory(MyAlertComponent);
    //创建组件
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.message = message;
  }
  // 销毁动态插入的组件（dialog）
  ngOnDestroy() {
    this.componentRef.destroy()
  }
  // 提示框确认按钮和确认框取消按钮点击事件
  closeDialog() {
    this.componentRef.instance.outputDecline.subscribe(
      (msg: string) => {
        console.log(msg);
        this.ngOnDestroy();
        return msg;
      }
    );
  }
}
