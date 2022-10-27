import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WHOAREWE2Component } from './whoarewe2.component';

describe('WHOAREWE2Component', () => {
  let component: WHOAREWE2Component;
  let fixture: ComponentFixture<WHOAREWE2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WHOAREWE2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WHOAREWE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
