import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEntrepriseComponent } from './back-entreprise.component';

describe('BackEntrepriseComponent', () => {
  let component: BackEntrepriseComponent;
  let fixture: ComponentFixture<BackEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
