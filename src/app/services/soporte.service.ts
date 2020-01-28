import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Soporte } from '../models/soporte';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  public allSoporte: any = null;

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://192.168.223.212:3002/';
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

    return this.http.post(this.baseurl + 'soporteup', input, {responseType: 'text'});
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
