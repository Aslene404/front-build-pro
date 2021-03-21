import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPubComponent } from './back-pub.component';

describe('BackPubComponent', () => {
  let component: BackPubComponent;
  let fixture: ComponentFixture<BackPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
