import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {UserService} from "../../core/service/user.service";

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit{

  condition: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService:UserService,
  ) { }
  ngOnInit(): void {
    console.log("初始化指令");
    // 订阅 Observables (isAuthenticated)
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        console.log(isAuthenticated);
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }
  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }
}
