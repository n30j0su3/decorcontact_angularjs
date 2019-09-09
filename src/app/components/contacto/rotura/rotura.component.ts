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
      tipo_documento_compra: ['', Validators.required],
      num_pedido: ['', Validators.required],
      codigo_producto: [''],
      descripcion_producto: [''],
      cantidad_comprada: [''],
      cantidad_rotura: [''],
      observaciones: [''],
      forma_compensacion: ['', Validators.required],
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
