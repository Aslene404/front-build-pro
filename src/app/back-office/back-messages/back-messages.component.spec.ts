import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackMessagesComponent } from './back-messages.component';

describe('BackMessagesComponent', () => {
  let component: BackMessagesComponent;
  let fixture: ComponentFixture<BackMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
