import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactoModule } from './modules/contacto/contacto.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectBrandComponent } from './components/select-brand/select-brand.component';
import { ReactiveFormsModule } from '@angular/forms';


// Módulo de cliente para usar http
import { HttpClientModule } from '@angular/common/http';
// Módulo de servicios
import { Clientes } from './models/clientes';
import { TestService } from './services/provider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SelectBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
