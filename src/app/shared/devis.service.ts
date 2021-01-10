import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DevisesService {

  constructor(private _httpClient: HttpClient) { }

getAllDevis(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/devis/all') as Observable<IApiResponse>;
  }

  addDevis(devis): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/devis/send', devis) as Observable<IApiResponse>;
  }
  deleteDevis(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/devis/delete/${id}`) as Observable<IApiResponse>;
  }
}