import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class E_projectssService {

  constructor(private _httpClient: HttpClient) { }

getAllE_projects(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/e_projects/all') as Observable<IApiResponse>;
  }

  addE_projects(e_projects): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/e_projects/send', e_projects) as Observable<IApiResponse>;
  }
  updateE_projects(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/e_projects/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  deleteE_projects(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/e_projects/delete/${id}`) as Observable<IApiResponse>;
  }
  getE_projectsById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/e_projects/${id}`) as Observable<IApiResponse>;
  }
}