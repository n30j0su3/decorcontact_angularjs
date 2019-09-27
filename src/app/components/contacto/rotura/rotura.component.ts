import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Rotura } from 'src/app/models/rotura';
import { RoturaService, FileServiceService } from 'src/app/services/provider';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { RxFormGroup, RxFormBuilder, FormGroupExtension } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-rotura',
  templateUrl: './rotura.component.html',
  styleUrls: ['./rotura.component.scss']
})
export class RoturaComponent implements OnInit {
  user: FormGroup;
  products: Rotura[];
  brand: string;
  uploadedFiles: Array<File>;
  upload: Array<any>;
  upload_end: any;
  // upload files https://stackblitz.com/edit/angular-material-file-upload
  // https://www.npmjs.com/package/angular-material-fileupload
  // editable table https://mdbootstrap.com/docs/angular/tables/editable/
  // editable table https://embed.plnkr.co/plunk/2Fue9L
  /*  roturaList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
  ];*/
  // private formBuilder: RxFormBuilder
  constructor(
    private route: ActivatedRoute,
    private fb: RxFormBuilder,
    private roturaSer: RoturaService,
    private fileSer: FileServiceService
  ) {
    // constructor(private route: ActivatedRoute, private fb: FormBuilder, private roturaSer: RoturaService) {
    this.route.data.subscribe(v => {
      this.brand = v.data_brand;
      console.log(v.data_brand);
      // return v.data_brand;
    });
  }
  submitted = false;
  // Ejemplo formularios angular https://unprogramador.com/formularios-en-angular/
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
      this.roturaSer.upload(fileToUpload2, namme).subscribe(res => {
        // this.roturaSer.upload(fileToUpload).subscribe(res => {
        // console.log(res);
      });
    }
  }
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
      empresa: [''],
      autorizacion: ['', Validators.required]
      // , upload: ['']
    });
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);
  }

  readFileAsDataURL(file) {
    // tslint:disable-next-line: variable-name
    const result_base64 = new Promise(resolve => {
      const fileReader = new FileReader();
      fileReader.onload = e => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
    // console.log(result_base64);
    return result_base64;
  }

  async onSubmit() {
    this.submitted = true;
    this.user.patchValue({
      empresa: this.brand
    });
    this.addFile();

    /*
    let formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      const file = this.uploadedFiles[i];
      // Add the file to the request.
      formData.append("archivos", file, file.name);
    }*/
    // formData.append('uploads_end', this.upload_end);
    // console.log(formData.get('archivos'));

    if (this.user.valid) {
      this.roturaSer
        .addRotura_n(this.user.value)
        // this.roturaSer.addRotura_n(this.user.value, formData)
        .subscribe(data => {
          console.log(data);
          if (data.includes('rotura added')) {
            alert('Complete');
          } else {
            alert('Algo falló');
          }
          console.log(data);
          // this.router.navigate(['']);
        });
    }
  }
  // get the form short name to access the form fields
  get f() {
    return this.user.controls;
  }
/*
  onFormSubmit(form: NgForm) {
    console.log(form);
    console.log(this.brand);

    this.submitted = true;
    // if (this.user.valid) {
    this.roturaSer.addRotura(this.user.value).subscribe(data => {
      console.log(data);
      // this.router.navigate(['']);
    });
    //} else{
    //  console.log('no valido');
    //}
  }*/
}
