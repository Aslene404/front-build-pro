import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _httpClient: HttpClient) { }

getAllContact(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/contact/all') as Observable<IApiResponse>;
  }

  addContact(contact): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/contact/send', contact) as Observable<IApiResponse>;
  }
  deleteContact(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/contact/delete/${id}`) as Observable<IApiResponse>;
  }
}