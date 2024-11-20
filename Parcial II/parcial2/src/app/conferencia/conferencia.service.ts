import { Injectable } from '@angular/core';

import { Conferencia } from './Conferencia';

import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencia[]> {
    return this.http.get<Conferencia[]>(this.apiUrl);
  }

  fechaActual = new Date();

}
