import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Soporte } from '../models/soporte';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  public allSoporte: any = null;

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://localhost:3002/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllSoporte() {
    this.http.get<any[]>(this.baseurl + 'soporte')
    .subscribe(apiData => (this.allSoporte = apiData));
    return this.allSoporte;
  }

  getSoporteById(id: string) {
    return this.http.get<any>(this.baseurl + 'soporte' + '/' + id);
  }

  addSoporte_n(product: any) {
    // console.log(this.http.post(this.baseurl + 'rotura', product));
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions));
    return this.http.post(this.baseurl + 'soporte', product, {responseType: 'text'});
  }
  deleteSoporte(id: number){
    return this.http.delete(this.baseurl + 'soporte' + '/' + id);
  }

  updateSoporte(product: Soporte){
    return this.http.put(this.baseurl + 'soporte' + '/' + product._id, product);
  }

}
