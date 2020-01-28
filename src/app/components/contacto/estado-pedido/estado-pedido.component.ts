import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EstadoPedidoService} from 'src/app/services/estado-pedido.service'
import { FormGroup, Validators } from '@angular/forms';
import { RxFormBuilder, RxwebValidators, NumericValueType} from '@rxweb/reactive-form-validators';
import { DatePipe } from '@angular/common';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';

@Component({
  selector: 'app-estado-pedido',
  templateUrl: './estado-pedido.component.html',
  styleUrls: ['./estado-pedido.component.scss'],
  providers: [DatePipe]
})
export class EstadoPedidoComponent implements OnInit {
  user: FormGroup;
  brand: string;
  dateNow : Date = new Date();
  name: string;
  direccion: string;
  ciudad: string;
  progress: number;
  fecha_creacion: string;
  fecha_alistamiento: string;
  fecha_despacho: string;
  fecha_estimada: string;
  transportador: string;
  conductor: string;

  constructor(
    private route: ActivatedRoute,
    private fb: RxFormBuilder,
    private pedidoSer: EstadoPedidoService,
    private datePipe: DatePipe
  ) {
    this.route.data.subscribe(v => {
      this.brand = v.data_brand;
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }

  ngOnInit() {
    this.user = this.fb.group({
      cliente: ['', [Validators.required, Validators.minLength(5), RxwebValidators.numeric({acceptValue:NumericValueType.PositiveNumber ,allowDecimal:false })]],
      pedido: ['', [Validators.required, Validators.minLength(5)]]
    });
    // variables to test
  }

  async getInfo() {
    if (this.user.valid) {
      // Asign the query result from API
      this.name = 'nombre';
      this.direccion = 'direccion';
      this.ciudad = 'ciudad';
      this.progress = 25;
      this.transportador = 'transportador';
      this.conductor = 'conductor';
      this.fecha_creacion = 'fecha_creacion';
      this.fecha_alistamiento = 'fecha_alistamiento';
      this.fecha_despacho = 'fecha_despacho';
      this.fecha_estimada = 'fecha_estimada';
      if (this.progress >= 13 && this.progress < 100) {
        const progress1 = this.progress - 12;
        document.documentElement.style.setProperty('--progress_value', (progress1.toString() + '%'));
      }
      if (this.progress = 100) {
        document.documentElement.style.setProperty('--progress_value', (88 + '%'));
      } else {
        document.documentElement.style.setProperty('--progress_value', (2 + '%'));
      }
      // document.documentElement.style.setProperty('--progress_value', (this.progress.toString() + '%'));
      // document.documentElement.style.setProperty('.ico_relative', 3);
      // let input = document.querySelector("input");
      // input.onkeyup = (e) => {
    } else {
      this.name = '';
      this.direccion = '';
      this.ciudad = '';
      this.progress = 0;
      document.documentElement.style.setProperty('--progress_value', (0 + '%'));
      this.transportador = '';
      this.conductor = '';
      this.fecha_creacion = '';
      this.fecha_alistamiento = '';
      this.fecha_despacho = '';
      this.fecha_estimada = '';
    }
  }

}
