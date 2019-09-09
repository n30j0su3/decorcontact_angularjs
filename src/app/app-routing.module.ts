import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/default/not-found/not-found.component';
import { SelectBrandComponent } from './components/default/select-brand/select-brand.component';
import { PQRSComponent } from './components/contacto/pqrs/pqrs.component';
import { SoporteComponent } from './components/contacto/soporte/soporte.component';
// import { ContactoModule } from './components/contacto/contacto.module';
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
  { path: 'decorceramica', data : {data_brand : 'decorceramica'},
  loadChildren: () => import('./components/contacto/contacto.module').then(mod => mod.ContactoModule)
  },
  { path: 'novacasa', data : {data_brand : 'novacasa'},
  loadChildren: () => import('./components/contacto/contacto.module').then(mod => mod.ContactoModule)
  },
  { path: 'klpcomercial', data : {data_brand : 'klp'},
  loadChildren: () => import('./components/contacto/contacto.module').then(mod => mod.ContactoModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  /*{
    path: 'decorceramica',
    component: PQRSComponent,
    data : {data_brand : 'decorceramica'}
  },
  {
    path: 'novacasa',
    component: SoporteComponent,
    data : {data_brand : 'novacasa', test_data : UserService}
  },
  {
    path: 'klpcomercial',
    component: ContactoModule,
    data : {data_brand : 'klp'}
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
