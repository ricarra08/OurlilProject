import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Trms } from '../trf/trms';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  
  private trfSubject: BehaviorSubject<Trms>;
  public trf : Observable<Trms>;

  constructor(
    private router: Router,
    private http: HttpClient
    ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();

      this.trfSubject = new BehaviorSubject<Trms>(JSON.parse(localStorage.getItem('trf')));
      this.trf = this.trfSubject.asObservable();


  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public get trfValue(): Trms{
    return this.trfSubject.value;
  }
  
  login(username, password){
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password})
    .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['']);
  } //implement on emp HP once login works

  register(trms: Trms) {
    return this.http.post(`${environment.apiUrl}/users/register`, trms);
}

  getAll() {
    return this.http.get<Trms[]>(`${environment.apiUrl}/users`);
}


  //getAll & getById & update & delete will done when working with tables


}
