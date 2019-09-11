import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Rotura } from 'src/app/models/rotura';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-rotura',
  templateUrl: './rotura.component.html',
  styleUrls: ['./rotura.component.scss']
})
export class RoturaComponent implements OnInit {
  user: FormGroup;
  classRotura: Rotura;
  editField: string;
  roturaList: Array<any> = [];
  roturaListTable: Array<any> = ['', '', '', '', ''];
  // editable table https://mdbootstrap.com/docs/angular/tables/editable/
  // editable table https://embed.plnkr.co/plunk/2Fue9L
/*  roturaList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
  ];*/

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.data.subscribe(v => {
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }

  // Ejemplo formularios angular https://unprogramador.com/formularios-en-angular/
  ngOnInit() {
    // this.classRotura._id
    this.user = this.fb.group({
      /*name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]*/
      cliente: ['', Validators.required],
      tipo_documento_compra: ['', Validators.requiredTrue],
      num_pedido: ['', Validators.required],
      codigo_producto: ['',],
      descripcion_producto: [''],
      cantidad_comprada: [''],
      cantidad_rotura: [''],
      observaciones: [''],
      forma_compensacion: ['', Validators.requiredTrue],
      direccion: [''],
      ciudad: ['']
    });

  }
  onSubmit(){
    console.log('Enviado');
  }
  onFormSubmit(form: NgForm){
    console.log(form);
  }

}
