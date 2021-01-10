import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUser } from './user.model';
import { IApiResponse } from '../models/api-response.model';
import { environment } from 'src/environments/environment';


/**
 * UserService Module manage the CRUD over API endpoints
 */
@Injectable()
export class UserService {

  constructor(private httpClient:HttpClient) { }

  postUser(user:IUser):Observable<IApiResponse>{
      return this.httpClient.post(`${environment.API_URL}/api/v1/users/register`,user) as Observable<IApiResponse>;
  }

  deleteUser(id){
    return this.httpClient.delete(`${environment.API_URL}/api/v1/users/delete/${id}`) as Observable<IApiResponse>;;
  }

  updateUserRole(id,role):Observable<IApiResponse>{
   return this.httpClient.put(`${environment.API_URL}/api/v1/users/update/role/${id}`,{"new_role":role}) as Observable<IApiResponse>;
  }

  updateUser(id,user):Observable<IApiResponse>{
     let _user={...user};
    return this.httpClient.put(`${environment.API_URL}/api/v1/users/update/${id}`,_user) as Observable<IApiResponse>;
  }

  getAllUsers(){
    return this.httpClient.get(`${environment.API_URL}/api/v1/users`) as Observable<IApiResponse>;
  }

  getUserById(id){
    
    return this.httpClient.get(`${environment.API_URL}/api/v1/users/oneuser/${id}`) as Observable<IApiResponse>;
  }
}
