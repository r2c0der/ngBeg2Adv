import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpexercisesComponent } from './httpexercises.component';

describe('HttpexercisesComponent', () => {
  let component: HttpexercisesComponent;
  let fixture: ComponentFixture<HttpexercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpexercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpexercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
