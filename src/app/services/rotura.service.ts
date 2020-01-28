import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rotura } from '../models/rotura';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoturaService {
  public allRotura: any = null;

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://192.168.223.212:3002/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllRotura() {
    this.http.get<any[]>(this.baseurl + 'rotura')
    .subscribe(apiData => (this.allRotura = apiData));
    return this.allRotura;
  }

  getRoturaById(id: string) {
    return this.http.get<Rotura>(this.baseurl + 'rotura' + '/' + id);
  }

  // addRotura_n(product: any, uploadsfiles: any) {
  //   return this.http.post(this.baseurl + 'rotura', {product, uploadsfiles}, {responseType: 'text'});
  upload(fileToUpload: any, name: string) {
    let input = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < fileToUpload.length; i++) {
      // console.log(fileToUpload[i].type);
      if (fileToUpload[i].type === 'image/jpeg' || fileToUpload[i].type === 'image/gif' || fileToUpload[i].type === 'image/png'
      || fileToUpload[i].type === 'video/webm' || fileToUpload[i].type === 'video/mp4' || fileToUpload[i].type === 'application/pdf'
      || fileToUpload[i].type === 'application/msword') {
        input.append('file', fileToUpload[i], name);
      }
    }
    // input.append('file', fileToUpload);

    return this.http.post(this.baseurl + 'roturaup', input, {responseType: 'text'});
  }
  addRotura_n(product: any) {
    return this.http.post(this.baseurl + 'rotura', product, {responseType: 'text'});
  }

  deleteRotura(id: number){
    return this.http.delete(this.baseurl + 'rotura' + '/' + id);
  }

  updateRotura(product: Rotura){
    return this.http.put(this.baseurl + 'rotura' + '/' + product._id, product);
  }
/*
  addRotura(product: any): Observable<any> {
    // console.log(product);
    const json = JSON.stringify(product);
    // El backend recogerá un parametro json
    // console.log(json);
    const params = 'json=' + json;
    // console.log(params);
    // Establecemos cabeceras
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.log(this.http.post(this.baseurl + 'rotura', params, {headers: headers}));
    // return this.http.post(this.baseurl + 'rotura', params, {headers: headers});
    //console.log(this.http.post(this.baseurl + 'rotura', product));
    //return this.http.post(this.baseurl + 'rotura', product);
    // console.log(this.http.post(this.baseurl + 'rotura', json));
    console.log(this.http.post(this.baseurl + 'rotura', product));
    return this.http.post(this.baseurl + 'rotura', product);
    // this.http.post(this.baseurl + 'rotura', json)
    // .subscribe(apiData => (this.allRotura = apiData));
    // return this.allRotura;
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions));
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product))
    // .pipe(map(response => new product(response))));
    // return this.http
    // .post(this.baseurl + 'rotura', product).pipe(
    // map(response => {
    //   return new product(response);
    // }),
    // );
    // console.log(this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions));
    // return this.http.post<any>(this.baseurl + 'rotura', JSON.stringify(product), this.httpOptions);
  }*/
}
