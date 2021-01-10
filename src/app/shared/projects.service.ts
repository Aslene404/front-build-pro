import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IProject } from '../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _httpClient: HttpClient) { }

getAllproject(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/projects') as Observable<IApiResponse>;
  }

getUserProjects(userId:string):Observable<IApiResponse>{
  return this._httpClient.get(environment.API_URL + '/api/v1/projects/userprojects/'+userId) as Observable<IApiResponse>;
}


getProjectById(projectId:string):Observable<IApiResponse>{
  return this._httpClient.get(environment.API_URL + '/api/v1/projects/byId/'+projectId) as Observable<IApiResponse>;
}

  addProject(project): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/projects/addProject', project) as Observable<IApiResponse>;
  }
  
  deleteproject(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/project/delete/${id}`) as Observable<IApiResponse>;
  }
  
}