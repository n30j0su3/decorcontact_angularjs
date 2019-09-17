import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Rotura } from 'src/app/models/rotura';
import { RoturaService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-rotura',
  templateUrl: './rotura.component.html',
  styleUrls: ['./rotura.component.scss']
})
export class RoturaComponent implements OnInit {
  user: FormGroup;
  products: Rotura[];
  brand: string;
  // classRotura: Rotura;
  // editField: string;
  // roturaList: Array<any> = [];
  // roturaListTable: Array<any> = ['', '', '', '', ''];
  // editable table https://mdbootstrap.com/docs/angular/tables/editable/
  // editable table https://embed.plnkr.co/plunk/2Fue9L
/*  roturaList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
  ];*/

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private roturaSer: RoturaService,) {
    this.route.data.subscribe(v => {
      this.brand = v.data_brand;
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }
  submitted = false;
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
      direccion_compensacion: [''],
      ciudad: [''],
      empresa: ['']
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
      this.roturaSer.addRotura_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('rotura added')) {
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

  onFormSubmit(form: NgForm) {
    // console.log(form);
//    form.controls['empresa'].patchValue(this.brand);

/*form.controls.empresa.patchValue({
      empresa: this.brand
    });*/

//
    console.log(form);
    console.log(this.brand);
    // this.roturaSer.getAllRotura();
    // this.roturaSer.addRotura(form);
    // this.roturaSer.addRotura(form).subscribe((reponse) => {
    //  console.log(reponse);
    // });

    this.submitted = true;
    // if (this.user.valid) {
    this.roturaSer.addRotura(this.user.value)
      .subscribe( data => {
        console.log(data);
        // this.router.navigate(['']);
      });
    /*} else{
      console.log('no valido');
    }*/
  }
}
