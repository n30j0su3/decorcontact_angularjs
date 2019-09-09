import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFormComponent } from './select-form/select-form.component';
import { PQRSComponent } from './pqrs/pqrs.component';
import { SoporteComponent } from './soporte/soporte.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { RoturaComponent } from './rotura/rotura.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'contact', component: SelectFormComponent },
  { path: 'contact/pqrs', component: PQRSComponent },
  { path: 'contact/soporte', component: SoporteComponent },
  { path: 'contact/novedades', component: NovedadesComponent },
  { path: 'contact/rotura', component: RoturaComponent }
  // { path: ':id', component: ItemsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }
