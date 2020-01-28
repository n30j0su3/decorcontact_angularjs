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
  baseurl: string = 'http://192.168.223.212:3002/';
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
  upload(fileToUpload: any, name: string) {
    const input = new FormData();
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

    return this.http.post(this.baseurl + 'novedadup', input, {responseType: 'text'});
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
