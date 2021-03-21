import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ITrend } from './models/trend.model';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private _httpClient: HttpClient) { }

getAllTrend(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/trend/all') as Observable<IApiResponse>;
  }

  addTrend(trend: ITrend): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/trend/send', trend) as Observable<IApiResponse>;
  }
  updateTrend(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/trend/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  updateTrendProjects(id:string,body:{projectId:string}):Observable<IApiResponse>{
    return this._httpClient.put(
      `${environment.API_URL}/api/v1/trend/update/${id}`,body) as Observable<IApiResponse>;
    
  }

  deleteTrend(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/trend/delete/${id}`) as Observable<IApiResponse>;
  }

  getTrendById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/trend/${id}`) as Observable<IApiResponse>;
  }
}