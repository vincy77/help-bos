import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HApiComponent } from './h-api.component';

describe('HApiComponent', () => {
  let component: HApiComponent;
  let fixture: ComponentFixture<HApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
