import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceEntrepriseComponent } from './espace-entreprise.component';

describe('EspaceEntrepriseComponent', () => {
  let component: EspaceEntrepriseComponent;
  let fixture: ComponentFixture<EspaceEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
