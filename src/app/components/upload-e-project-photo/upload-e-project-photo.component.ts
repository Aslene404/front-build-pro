import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFile, UploadInput, UploaderOptions, humanizeBytes, UploadOutput } from 'ngx-uploader';
import { E_projectssService } from 'src/app/shared/e_projects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-e-project-photo',
  templateUrl: './upload-e-project-photo.component.html',
  styleUrls: ['./upload-e-project-photo.component.css']
})
export class UploadEProjectPhotoComponent implements OnInit {
  @Input() e_projectId: string;
  @Output() uploadPictureEvent:EventEmitter<boolean> = new EventEmitter();
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humalizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;
  constructor(private e_projectService:E_projectssService,private snackBar: MatSnackBar) {
    this.options = { concurrency: 1, maxUploads: 1 };
  this.files = [];
  this.uploadInput = new EventEmitter<UploadInput>();
  this.humalizeBytes = humanizeBytes;
   }

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
      url: `${environment.API_URL}/api/v1/upload/e_projects/photo`,
      method: 'POST',
      data: { id: this.e_projectId }
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
  ngOnInit() {
  }

}
