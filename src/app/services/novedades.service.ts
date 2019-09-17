import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Novedades } from '../models/novedades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  public allNovedades: any = null;

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://localhost:3002/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllNovedades() {
    this.http.get<any[]>(this.baseurl + 'novedades')
    .subscribe(apiData => (this.allNovedades = apiData));
    return this.allNovedades;
  }

  getNovedadesById(id: string) {
    return this.http.get<any>(this.baseurl + 'novedades' + '/' + id);
  }

  addNovedades_n(product: any) {
    // console.log(this.http.post(this.baseurl + 'rotura', product));
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions));
    return this.http.post(this.baseurl + 'novedades', product, {responseType: 'text'});
  }
  deleteNovedades(id: number){
    return this.http.delete(this.baseurl + 'novedades' + '/' + id);
  }

  updateNovedades(product: Novedades){
    return this.http.put(this.baseurl + 'novedades' + '/' + product._id, product);
  }
}
