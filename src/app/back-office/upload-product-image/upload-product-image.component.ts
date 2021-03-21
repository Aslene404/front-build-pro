import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { humanizeBytes, UploaderOptions, UploadFile, UploadInput, UploadOutput } from 'ngx-uploader';
import { ProductsService } from 'src/app/shared/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-product-image',
  templateUrl: './upload-product-image.component.html',
  styleUrls: ['./upload-product-image.component.css']
})
export class UploadProductImageComponent implements OnInit {
  @Input() productId: string;
  @Output() uploadPictureEvent:EventEmitter<boolean> = new EventEmitter();
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humalizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;
  constructor(private productService: ProductsService) {
  this.options = { concurrency: 1, maxUploads: 1 };
  this.files = [];
  this.uploadInput = new EventEmitter<UploadInput>();
  this.humalizeBytes = humanizeBytes; }

  onUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        // uncomment this if you want to auto upload files when added
        this.startUpload();
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.files.push(output.file);
        }
        break;
      case 'uploading':
        if (typeof output.file !== 'undefined') {
          // update current data in files array for uploading file
          const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        console.log(`%c Avatar Uploaded `, 'background-color:tomato;color:white');
        this.uploadPictureEvent.emit(true);
        break;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: `${environment.API_URL}/api/v1/upload/product/image`,
      method: 'POST',
      data: { id: this.productId }
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
  ngOnInit(): void {
  }

}
