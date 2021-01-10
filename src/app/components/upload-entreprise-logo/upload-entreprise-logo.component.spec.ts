import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEntrepriseLogoComponent } from './upload-entreprise-logo.component';

describe('UploadEntrepriseLogoComponent', () => {
  let component: UploadEntrepriseLogoComponent;
  let fixture: ComponentFixture<UploadEntrepriseLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEntrepriseLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEntrepriseLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
