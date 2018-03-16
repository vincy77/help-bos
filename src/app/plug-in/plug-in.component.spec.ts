import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugInComponent } from './plug-in.component';

describe('PlugInComponent', () => {
  let component: PlugInComponent;
  let fixture: ComponentFixture<PlugInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
