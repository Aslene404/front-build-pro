import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { humanizeBytes, UploaderOptions, UploadFile, UploadInput, UploadOutput } from 'ngx-uploader';
import { TrendsService } from 'src/app/shared/trend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-trend-image',
  templateUrl: './upload-trend-image.component.html',
  styleUrls: ['./upload-trend-image.component.css']
})
export class UploadTrendImageComponent implements OnInit {
  @Input() trendId: string;
  @Output() uploadPictureEvent:EventEmitter<boolean> = new EventEmitter();
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humalizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;
  constructor(private trendService: TrendsService,private snackBar: MatSnackBar) {
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
        this.snackBar.open("Image envoyée avec succès", 'Close', { duration: 5000 });
        this.uploadPictureEvent.emit(true);
        break;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: `${environment.API_URL}/api/v1/upload/trend/image`,
      method: 'POST',
      data: { id: this.trendId }
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
