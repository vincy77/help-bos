import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api1Component } from './api1.component';

describe('Api1Component', () => {
  let component: Api1Component;
  let fixture: ComponentFixture<Api1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
