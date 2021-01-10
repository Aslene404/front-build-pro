import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EntreprisesService } from './entreprise.service';
import { IEntreprise } from './models/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseResolver implements Resolve<IEntreprise> {

  constructor(private service: EntreprisesService) {}




  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getEntrepriseById(route.paramMap.get('id'));
  }
}