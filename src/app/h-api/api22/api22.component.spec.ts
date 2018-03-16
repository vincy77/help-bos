import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api22Component } from './api22.component';

describe('Api22Component', () => {
  let component: Api22Component;
  let fixture: ComponentFixture<Api22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
