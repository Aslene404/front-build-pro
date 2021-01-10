import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseUpdateComponent } from './entreprise-update.component';

describe('EntrepriseUpdateComponent', () => {
  let component: EntrepriseUpdateComponent;
  let fixture: ComponentFixture<EntrepriseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
