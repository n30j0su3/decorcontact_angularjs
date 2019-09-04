import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PQRSComponent } from './components/pqrs/pqrs.component';
import { SoporteComponent } from './components/soporte/soporte.component';

@NgModule({
  declarations: [PQRSComponent, SoporteComponent],
  imports: [
    CommonModule
  ],
  exports: [PQRSComponent, SoporteComponent]
})
export class ContactoModule { }
