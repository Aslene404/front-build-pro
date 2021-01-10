import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IApiResponse } from '../shared/models/api-response.model';
import { IMaterial } from '../shared/models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(private _httpClient: HttpClient) { }

  addNewMaterial(projectId:string,_material:IMaterial): Observable<IApiResponse> {
      return this._httpClient.post(environment.API_URL + '/api/v1/materials/addmaterial/'+projectId,_material) as Observable<IApiResponse>;
    }


}
