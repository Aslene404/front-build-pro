import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IProduct } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

getAllProduct(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/product/all') as Observable<IApiResponse>;
  }

  addProduct(product: IProduct): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/product/send', product) as Observable<IApiResponse>;
  }
  updateProduct(id,action){
    return this._httpClient.patch(
      `${environment.API_URL}/api/v1/product/update/${id}`,action) as Observable<IApiResponse>;
    
  }
  updateProductProjects(id:string,body:{projectId:string}):Observable<IApiResponse>{
    return this._httpClient.put(
      `${environment.API_URL}/api/v1/product/update/${id}`,body) as Observable<IApiResponse>;
    
  }

  deleteProduct(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/product/delete/${id}`) as Observable<IApiResponse>;
  }

  getProductById(id): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + `/api/v1/product/${id}`) as Observable<IApiResponse>;
  }
}