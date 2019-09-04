import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectBrandComponent } from './components/select-brand/select-brand.component';
import { PQRSComponent } from './modules/contacto/components/pqrs/pqrs.component';
import { SoporteComponent } from './modules/contacto/components/soporte/soporte.component';
import { UserService } from './services/provider';
const routes: Routes = [
  {
    path: 'home',
    component: SelectBrandComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'decorceramica',
    component: PQRSComponent,
    data : {some_data : 'some value'}
  },
  {
    path: 'novacasa',
    component: SoporteComponent,
    data : {some_data : 'some value', test_data : UserService}
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
