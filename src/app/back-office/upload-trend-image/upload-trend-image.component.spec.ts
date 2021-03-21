import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTrendImageComponent } from './upload-trend-image.component';

describe('UploadTrendImageComponent', () => {
  let component: UploadTrendImageComponent;
  let fixture: ComponentFixture<UploadTrendImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTrendImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTrendImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
