import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})

export class TestService {
// https://www.zeptobook.com/angular-7-crud-with-node-js-api/
// see more
  constructor(private http: HttpClient) { }

  baseurl: string = "http://192.168.223.212:3002/";

  getAllProducts(){
    return this.http.get<Clientes[]>(this.baseurl + 'clientes');
  }

  getProductById(id: string){
    return this.http.get<Clientes>(this.baseurl + 'clientes' + '/' + id);
  }

  addProduct(product: Clientes){
    return this.http.post(this.baseurl + 'clientes', product);
  }

  deleteProduct(id: number){
    return this.http.delete(this.baseurl + 'clientes' + '/' + id);
  }

  updateProduct(product: Clientes){
    return this.http.put(this.baseurl + 'clientes' + '/' + product._id, product);
  }
}
