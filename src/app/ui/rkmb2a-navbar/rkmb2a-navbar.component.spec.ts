import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rkmb2aNavbarComponent } from './rkmb2a-navbar.component';

describe('Rkmb2aNavbarComponent', () => {
  let component: Rkmb2aNavbarComponent;
  let fixture: ComponentFixture<Rkmb2aNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rkmb2aNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rkmb2aNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
