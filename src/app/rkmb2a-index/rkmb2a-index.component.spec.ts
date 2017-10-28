import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rkmb2aIndexComponent } from './rkmb2a-index.component';

describe('Rkmb2aIndexComponent', () => {
  let component: Rkmb2aIndexComponent;
  let fixture: ComponentFixture<Rkmb2aIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rkmb2aIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rkmb2aIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
