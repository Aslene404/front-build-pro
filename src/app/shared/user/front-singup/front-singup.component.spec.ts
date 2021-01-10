import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSingupComponent } from './front-singup.component';

describe('FrontSingupComponent', () => {
  let component: FrontSingupComponent;
  let fixture: ComponentFixture<FrontSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
