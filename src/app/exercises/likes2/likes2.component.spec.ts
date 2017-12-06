import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Likes2Component } from './likes2.component';

describe('Likes2Component', () => {
  let component: Likes2Component;
  let fixture: ComponentFixture<Likes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Likes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Likes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
