import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonplaceholderUpdatedPostsComponent } from './jsonplaceholder-updated-posts.component';

describe('JsonplaceholderUpdatedPostsComponent', () => {
  let component: JsonplaceholderUpdatedPostsComponent;
  let fixture: ComponentFixture<JsonplaceholderUpdatedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonplaceholderUpdatedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonplaceholderUpdatedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
