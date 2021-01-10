import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLandpageComponent } from './back-landpage.component';

describe('BackLandpageComponent', () => {
  let component: BackLandpageComponent;
  let fixture: ComponentFixture<BackLandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
