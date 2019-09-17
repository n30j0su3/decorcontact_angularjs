import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pqrs } from '../models/pqrs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  public allPqrs: any = null;

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://localhost:3002/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllPqrs() {
    this.http.get<any[]>(this.baseurl + 'pqrs')
    .subscribe(apiData => (this.allPqrs = apiData));
    return this.allPqrs;
  }

  getPqrsById(id: string) {
    return this.http.get<any>(this.baseurl + 'pqrs' + '/' + id);
  }

  addPqrs_n(product: any) {
    // console.log(this.http.post(this.baseurl + 'rotura', product));
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions));
    return this.http.post(this.baseurl + 'pqrs', product, {responseType: 'text'});
  }
  deletePqrs(id: number){
    return this.http.delete(this.baseurl + 'pqrs' + '/' + id);
  }

  updatePqrs(product: Pqrs){
    return this.http.put(this.baseurl + 'pqrs' + '/' + product._id, product);
  }
}
