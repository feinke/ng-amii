import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmiiboReturn } from './amiibo.model';
import { Observable } from 'rxjs';

const API_URL = 'https://www.amiiboapi.com/api/';
const GET_ALL_AMIIBO = API_URL + 'amiibo';

type ReturnType = Object & AmiiboReturn;

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(GET_ALL_AMIIBO);
  }
}
