import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IInspire } from './models/inspire.model';

@Injectable({
  providedIn: 'root'
})
export class InspiresService {

  constructor(private _httpClient: HttpClient) { }

getAllInspire(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/inspire/all') as Observable<IApiResponse>;
  }

  addInspire(inspire: IInspire): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/inspire/send', inspire) as Observable<IApiResponse>;
  }
  updateInspire(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/inspire/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  updateInspireProjects(id:string,body:{projectId:string}):Observable<IApiResponse>{
    return this._httpClient.put(
      `${environment.API_URL}/api/v1/inspire/update/${id}`,body) as Observable<IApiResponse>;
    
  }

  deleteInspire(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/inspire/delete/${id}`) as Observable<IApiResponse>;
  }

  getInspireById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/inspire/${id}`) as Observable<IApiResponse>;
  }
}