import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTrendComponent } from './back-trend.component';

describe('BackTrendComponent', () => {
  let component: BackTrendComponent;
  let fixture: ComponentFixture<BackTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
