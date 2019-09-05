import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import components of module
import { PQRSComponent } from './pqrs/pqrs.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { ContactRoutingModule } from './contacto-routing.module';
// Example modules https://stackblitz.com/angular/bnookxvvvmr?file=src%2Fapp%2Fapp-routing.module.ts
@NgModule({
  declarations: [SelectFormComponent, PQRSComponent, SoporteComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  entryComponents: [SelectFormComponent],
  exports: [SelectFormComponent, PQRSComponent, SoporteComponent]
})
export class ContactoModule { }
