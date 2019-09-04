import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  _weather: Subject<number> = new Subject();

  constructor(protected http: HttpClient) { }

  get weather(): Subject<any> {
    return this.weather;
  }
  set weather(src: Subject<any>) {
    this._weather = src;
  }
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}

