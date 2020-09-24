import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trms } from './trms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrfService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080/Project1/api/submitTrmsForm';

  submitForm(form: Trms): Observable<Trms> {
    console.log(JSON.stringify(form))
    return this.httpClient.post<Trms>(this.baseUrl, JSON.stringify(form));
  }   
}
