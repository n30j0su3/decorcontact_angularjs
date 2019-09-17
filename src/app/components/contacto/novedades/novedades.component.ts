import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Novedades } from 'src/app/models/novedades';
import { NovedadesService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {
  user: FormGroup;
  products: Novedades[];
  brand: string;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private novedadesSer: NovedadesService) {
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
      tipo_novedad: [''],
      descripcion_producto: [''],
      cantidad_comprada: [''],
      cantidad_novedad: [''],
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
      this.novedadesSer.addNovedades_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('Novedad added')) {
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
