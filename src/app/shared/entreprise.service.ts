import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IEntreprise } from './models/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private _httpClient: HttpClient) { }

getAllEntreprise(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/entreprise/all') as Observable<IApiResponse>;
  }

  addEntreprise(entreprise: IEntreprise): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/entreprise/send', entreprise) as Observable<IApiResponse>;
  }
  updateEntreprise(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/entreprise/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  updateEntrepriseProjects(id:string,body:{projectId:string}):Observable<IApiResponse>{
    return this._httpClient.put(
      `${environment.API_URL}/api/v1/entreprise/update/${id}`,body) as Observable<IApiResponse>;
    
  }

  deleteEntreprise(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/entreprise/delete/${id}`) as Observable<IApiResponse>;
  }

  getEntrepriseById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/entreprise/${id}`) as Observable<IApiResponse>;
  }
}