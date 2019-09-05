import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import components of module
import { PQRSComponent } from './pqrs/pqrs.component';
import { SoporteComponent } from './soporte/soporte.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, PQRSComponent, SoporteComponent],
  imports: [
    CommonModule
  ],
  // entryComponents: [HomeComponent],
  exports: [HomeComponent, PQRSComponent, SoporteComponent]
})
export class ContactoModule { }
