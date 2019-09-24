import { Component, OnInit } from '@angular/core';
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
  uploadedFiles: Array < File > ;
  upload: Array < string > ;
  testt: Array < string > ;
  testing: any;
  // upload files https://stackblitz.com/edit/angular-material-file-upload
  // https://www.npmjs.com/package/angular-material-fileupload
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
      // , uploadFile: ['']
    });

  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);
  }

/*
  async readFileAsDataURL(file) {
    // tslint:disable-next-line: variable-name
    const result_base64 = await new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
    console.log(result_base64); // aGV5IHRoZXJl...
    return result_base64;
  }
  */
  onSubmit() {
    let formData = new FormData();
    this.submitted = true;
    this.user.patchValue({
      empresa: this.brand,
    });

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      // this.files = this.getBase64(this.uploadedFiles[i]);
      /*const reader = new FileReader();
      let files;
      reader.onload = (event) => {
        // files = reader.result;
        console.log(reader.result);
        files = reader.result;
      };
      reader.readAsDataURL(this.uploadedFiles[i]);*/
      this.fileSer.uploadDataUrl(this.uploadedFiles[i])
      .subscribe(dataold => {
          console.log(dataold);
          this.testing = dataold;
      });

          // this.data_response = data_response;
          // console.log(this.data_response);

          /*
          if (this.data_response === undefined) {
            console.log('No ha terminado la promesa');
            setTimeout(() => {
              console.log('esperando');
              this.data_response = data_response;
            }, 1500);
            console.log(this.data_response);
            this.testt[i] = this.data_response;
          } else {
            console.log('La promesa termino bien');
            this.testt[i] = this.data_response;
          }*/
          // console.log(data_response);
          // console.log(this.testt);
        // this.router.navigate(['']);
      /*.toPromise()
      .then(
        async data_response => {
          this.data_response = await data_response;
          console.log(data_response);
        })
      .then( function() { this.testt[i] = this.data_response; })
      .catch(e => {
          console.log(e);
      });*/
      let files;
      // this.upload[i] = files;

      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
      formData.append('uploads64[]', files);
      // formData.append('uploads64[]', files, this.uploadedFiles[i].name);
      // console.log(this.uploadedFiles[i]);
      console.log(this.uploadedFiles[i].name);
      console.log(formData.get('uploads[]'));
      console.log(formData);
      console.log(this.testt[i]);
    }
    if (this.user.valid) {
      this.roturaSer.addRotura_n(this.user.value, formData)
      // this.roturaSer.addRotura_n(this.user.value, formData.get('uploads[]'))
      // this.roturaSer.addRotura_n(this.user.value, this.files)
      .subscribe(
        data => {
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
