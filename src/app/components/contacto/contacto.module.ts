import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import components of module
import { PQRSComponent } from './pqrs/pqrs.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { ContactRoutingModule } from './contacto-routing.module';
import { NovedadesComponent } from './novedades/novedades.component';
import { RoturaComponent } from './rotura/rotura.component';

// Módulo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Animaciones & material
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule} from '@angular/material';

// Example modules https://stackblitz.com/angular/bnookxvvvmr?file=src%2Fapp%2Fapp-routing.module.ts

@NgModule({
  declarations: [SelectFormComponent, PQRSComponent, SoporteComponent, NovedadesComponent, RoturaComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule
  ],
  entryComponents: [SelectFormComponent],
  exports: [SelectFormComponent, PQRSComponent, SoporteComponent, NovedadesComponent, RoturaComponent,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule]
})
export class ContactoModule { }
