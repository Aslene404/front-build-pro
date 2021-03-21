import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInspireImageComponent } from './upload-inspire-image.component';

describe('UploadInspireImageComponent', () => {
  let component: UploadInspireImageComponent;
  let fixture: ComponentFixture<UploadInspireImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInspireImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInspireImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
