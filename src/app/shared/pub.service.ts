import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IPub } from './models/pub.model';

@Injectable({
  providedIn: 'root'
})
export class PubsService {

  constructor(private _httpClient: HttpClient) { }

getAllPub(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/pub/all') as Observable<IApiResponse>;
  }

  addPub(pub: IPub): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/pub/send', pub) as Observable<IApiResponse>;
  }
  updatePub(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/pub/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  updatePubProjects(id:string,body:{projectId:string}):Observable<IApiResponse>{
    return this._httpClient.put(
      `${environment.API_URL}/api/v1/pub/update/${id}`,body) as Observable<IApiResponse>;
    
  }

  deletePub(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/pub/delete/${id}`) as Observable<IApiResponse>;
  }

  getPubById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/pub/${id}`) as Observable<IApiResponse>;
  }
}