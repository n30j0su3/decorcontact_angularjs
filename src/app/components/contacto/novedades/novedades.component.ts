import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Novedades } from 'src/app/models/novedades';
import { NovedadesService } from 'src/app/services/provider';
import { FormGroup, Validators } from '@angular/forms';
import { RxFormGroup, RxFormBuilder} from '@rxweb/reactive-form-validators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss'],
  providers: [DatePipe]

})
export class NovedadesComponent implements OnInit {
  user: FormGroup;
  products: Novedades[];
  brand: string;
  dateNow : Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private fb: RxFormBuilder,
    private novedadesSer: NovedadesService,
    private datePipe: DatePipe
    )
  {
    // console.log(this.datePipe.transform(this.dateNow, 'dd-MM-yyyy-hh:mm:ss'));
    this.route.data.subscribe(v => {
      this.brand = v.data_brand;
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }
  submitted = false;
  @ViewChild('fileInput', { static: false }) fileInput;
  addFile(): void {
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload2 = fi.files;
      /*for (let i = 0; i < fi.files.length; i++) {
        fileToUpload2[i] = fi.files[i];
      }*/
      // let fileToUpload = fi.files[0];
      const namme = this.user.value.cliente;
      // this.user.get('cliente')
      this.novedadesSer.upload(fileToUpload2, namme).subscribe(res => {
        // this.roturaSer.upload(fileToUpload).subscribe(res => {
        // console.log(res);
      });
    }
  }
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
      autorizacion: ['', Validators.required],
      fecha_creacion: [''],
      fecha_modificacion: [''],
      estado_solicitud: ['']
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.user.patchValue({
      empresa: this.brand,
      fecha_creacion: this.datePipe.transform(this.dateNow, 'dd-MM-yyyy-hh:mm:ss'),
      fecha_modificacion: this.datePipe.transform(this.dateNow, 'dd-MM-yyyy-hh:mm:ss'),
      estado_solicitud: 'Creada'
    });
    this.addFile();
    // console.log('Enviado');
    // console.log(this.user.value);
    if (this.user.valid) {
      // console.log('Entra porque es valido');
      this.novedadesSer.addNovedades_n(this.user.value)
      .subscribe(
        data => {
          if (data.includes('Novedad added')) {
            alert('Tu solicitud fué enviada con éxito');
          } else {
            alert('Algo falló, por favor intentalo nuevamente');
          }
          console.log(data);
        // this.router.navigate(['']);
      });
    }
  }
  // get the form short name to access the form fields
  get f() { return this.user.controls; }
}
