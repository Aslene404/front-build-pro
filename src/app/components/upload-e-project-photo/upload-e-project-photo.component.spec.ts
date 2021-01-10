import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEProjectPhotoComponent } from './upload-e-project-photo.component';

describe('UploadEProjectPhotoComponent', () => {
  let component: UploadEProjectPhotoComponent;
  let fixture: ComponentFixture<UploadEProjectPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEProjectPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEProjectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
