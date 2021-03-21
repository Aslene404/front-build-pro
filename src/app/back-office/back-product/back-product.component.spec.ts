import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductComponent } from './back-product.component';

describe('BackProductComponent', () => {
  let component: BackProductComponent;
  let fixture: ComponentFixture<BackProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
