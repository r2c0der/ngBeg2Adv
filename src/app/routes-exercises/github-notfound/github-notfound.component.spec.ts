import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNotfoundComponent } from './github-notfound.component';

describe('GithubNotfoundComponent', () => {
  let component: GithubNotfoundComponent;
  let fixture: ComponentFixture<GithubNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
