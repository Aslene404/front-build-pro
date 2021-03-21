import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPubImageComponent } from './upload-pub-image.component';

describe('UploadPubImageComponent', () => {
  let component: UploadPubImageComponent;
  let fixture: ComponentFixture<UploadPubImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPubImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPubImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
