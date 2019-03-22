import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpViewerPage } from './top-up-viewer.page';

describe('TopUpViewerPage', () => {
  let component: TopUpViewerPage;
  let fixture: ComponentFixture<TopUpViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUpViewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUpViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
