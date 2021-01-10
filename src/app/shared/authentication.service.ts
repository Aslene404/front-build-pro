import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { IUser } from '../shared/user/user.model';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
      // tslint:disable-next-line:variable-name
        let _user: IUser;
        return this.http.post<any>(`${environment.API_URL}/api/v1/users/authenticate`, { email, password })
            .pipe(map(response => {
              _user = {...response.payload.user};
              _user.token = response.payload.token;
                // login successful if there's a jwt token in the response
              if (_user && _user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(_user));
                    this.currentUserSubject.next(_user);
                }

              return _user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next( null);
        document.location.reload(true);
    }
}
