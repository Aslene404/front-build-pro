import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDevisComponent } from './back-devis.component';

describe('BackDevisComponent', () => {
  let component: BackDevisComponent;
  let fixture: ComponentFixture<BackDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
