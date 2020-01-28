import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import components of module
import { PQRSComponent } from './pqrs/pqrs.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { ContactRoutingModule } from './contacto-routing.module';
import { NovedadesComponent } from './novedades/novedades.component';
import { RoturaComponent } from './rotura/rotura.component';
import { EstadoPedidoComponent } from './estado-pedido/estado-pedido.component';
// Import the form.io module
import { FormioModule } from 'angular-formio';
// Import the upload module
import { UploadModule } from '../upload/upload.module'

// Módulo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Módulo de reactive validators
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module

// Animaciones & material
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule, MatRadioModule, MatProgressBarModule} from '@angular/material';
// Example modules https://stackblitz.com/angular/bnookxvvvmr?file=src%2Fapp%2Fapp-routing.module.ts

@NgModule({
  declarations: [SelectFormComponent, PQRSComponent, SoporteComponent, NovedadesComponent, RoturaComponent, EstadoPedidoComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule, MatRadioModule,
    FormioModule, UploadModule, RxReactiveFormsModule, MatProgressBarModule
  ],
  entryComponents: [SelectFormComponent],
  exports: [SelectFormComponent, PQRSComponent, SoporteComponent, NovedadesComponent, RoturaComponent,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule, MatRadioModule,
    FormioModule, EstadoPedidoComponent, MatProgressBarModule]
})
export class ContactoModule { }
