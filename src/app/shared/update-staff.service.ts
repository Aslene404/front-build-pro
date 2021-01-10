import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse } from '../shared/models/api-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateStaffService {
  constructor(private _httpClient: HttpClient) { }

  updateProjectStaff(projectId:string,ids:string[]): Observable<IApiResponse> {
    let body={"ids":ids}
      return this._httpClient.post(environment.API_URL + '/api/v1/projects/staffupdate/'+projectId,body) as Observable<IApiResponse>;
    }
}
