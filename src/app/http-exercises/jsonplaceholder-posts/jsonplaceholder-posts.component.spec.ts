import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonplaceholderPostsComponent } from './jsonplaceholder-posts.component';

describe('JsonplaceholderPostsComponent', () => {
  let component: JsonplaceholderPostsComponent;
  let fixture: ComponentFixture<JsonplaceholderPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonplaceholderPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonplaceholderPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
