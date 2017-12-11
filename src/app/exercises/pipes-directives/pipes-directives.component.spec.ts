import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDirectivesComponent } from './pipes-directives.component';

describe('PipesDirectivesComponent', () => {
  let component: PipesDirectivesComponent;
  let fixture: ComponentFixture<PipesDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
