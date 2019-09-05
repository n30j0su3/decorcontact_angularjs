import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFormComponent } from './select-form/select-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'contact', component: SelectFormComponent }
  // { path: ':id', component: ItemsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }
