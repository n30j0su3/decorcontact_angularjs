import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { TestService } from 'src/app/services/provider';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})

export class SoporteComponent implements OnInit {

  products: Clientes[];
  /*equipos: any = [];
  weather: any;
  stri: string;*/

  constructor(private client: TestService, private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe(v => {
      console.log(v.data_brand);
      // return v.data_brand;
    });
    // this.equipos = this.client;
    // this.client.getUsers();
    // console.log(this.equipos);
   }

  ngOnInit() {
    this.getAllProducts();
    // console.log(this.equipos);
  }

  getAllProducts(): void {
    this.client.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }

  deleteProduct(product: Clientes){
    this.client.deleteProduct(product._id).subscribe(data => {
      console.log(data);
      this.getAllProducts();
    });
  }

  updateProduct(product: Clientes){
    localStorage.removeItem('productId');
    // localStorage.setItem('productId', product._id);
    this.router.navigate(['edit-product']);
  }

}
