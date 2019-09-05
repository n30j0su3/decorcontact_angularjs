import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the contact module
import { ContactoModule } from './components/contacto/contacto.module';
// Import the basics components
import { HeaderComponent } from './components/default/header/header.component';
import { FooterComponent } from './components/default/footer/footer.component';
import { NotFoundComponent } from './components/default/not-found/not-found.component';
import { SelectBrandComponent } from './components/default/select-brand/select-brand.component';
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
