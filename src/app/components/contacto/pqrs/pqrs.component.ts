import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pqrs } from 'src/app/models/pqrs';
import { PqrsService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { RxFormBuilder, RxwebValidators, NumericValueType} from '@rxweb/reactive-form-validators';
import { DatePipe } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss'],
  providers: [DatePipe]
})
export class PQRSComponent implements OnInit, OnDestroy {
  user: FormGroup;
  products: Pqrs[];
  brand: string;
  dateNow : Date = new Date();

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private pqrsSer: PqrsService, private datePipe: DatePipe) {
    this.route.data.subscribe(v => {
      this.brand = v.data_brand;
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }
  submitted = false;


  ngOnInit() {
    this.user = this.fb.group({
      cliente: ['', [Validators.required, Validators.minLength(5), RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber ,allowDecimal:false })]],
      tipo_documento_compra: ['', Validators.required],
      num_pedido: ['', Validators.required],
      motivo_contacto: [''],
      observaciones: [''],
      empresa: [''],
      autorizacion: ['', Validators.required],
      fecha_creacion: [''],
      fecha_modificacion: [''],
      estado_solicitud: [''],
      email: ['', [Validators.required, RxwebValidators.email()]],
      celular: ['', [Validators.required, Validators.minLength(7), RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber ,allowDecimal:false })]]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.user.patchValue({
      empresa: this.brand,
      fecha_creacion: this.datePipe.transform(this.dateNow, 'dd-MM-yyyy-hh:mm:ss'),
      fecha_modificacion: this.datePipe.transform(this.dateNow, 'dd-MM-yyyy-hh:mm:ss'),
      estado_solicitud: 'Creada'
    });
    // console.log('Enviado');
    // console.log(this.user.value);
    if (this.user.valid) {
      // console.log('Entra porque es valido');
      this.pqrsSer.addPqrs_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('PQRS added')) {
            alert('Tu solicitud fué enviada con éxito');
          } else{
            alert('Algo falló, por favor intentalo nuevamente');
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
