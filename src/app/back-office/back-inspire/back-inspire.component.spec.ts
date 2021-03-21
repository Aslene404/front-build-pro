import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackInspireComponent } from './back-inspire.component';

describe('BackInspireComponent', () => {
  let component: BackInspireComponent;
  let fixture: ComponentFixture<BackInspireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackInspireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackInspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
