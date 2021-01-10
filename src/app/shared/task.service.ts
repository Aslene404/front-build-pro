import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../shared/models/task.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IApiResponse } from '../shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _httpClient: HttpClient) { }

  addNewTask(projectId:string,_task:ITask): Observable<IApiResponse> {
      return this._httpClient.post(environment.API_URL + '/api/v1/tasks/addtask/'+projectId,_task) as Observable<IApiResponse>;
    }

}
