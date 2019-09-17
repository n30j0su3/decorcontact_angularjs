import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pqrs } from 'src/app/models/pqrs';
import { PqrsService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PQRSComponent implements OnInit, OnDestroy {
  user: FormGroup;
  products: Pqrs[];
  brand: string;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private pqrsSer: PqrsService) {
    this.route.data.subscribe(v => {
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }
  submitted = false;


  ngOnInit() {
    this.user = this.fb.group({
      cliente: ['', Validators.required],
      tipo_documento_compra: ['', Validators.required],
      num_pedido: ['', Validators.required],
      motivo_contacto: [''],
      observaciones: [''],
      empresa: [''],
      autorizacion: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.user.patchValue({
      empresa: this.brand,
    });
    // console.log('Enviado');
    // console.log(this.user.value);
    if (this.user.valid) {
      // console.log('Entra porque es valido');
      this.pqrsSer.addPqrs_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('PQRS added')) {
            alert('Complete');
          } else{
            alert('Algo falló');
          }
          console.log(data);
        // this.router.navigate(['']);
      });
    }
  }
  // get the form short name to access the form fields
  get f() { return this.user.controls; }

  ngOnDestroy() {
    // this.routeDataex.unsubscribe();
  }

}
