import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Soporte } from 'src/app/models/soporte';
import { SoporteService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})

export class SoporteComponent implements OnInit {
  user: FormGroup;
  products: Soporte[];
  brand: string;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private soporteSer: SoporteService) {
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
      codigo_producto: [''],
      descripcion_producto: [''],
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
      this.soporteSer.addSoporte_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('soporte added')) {
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

}
