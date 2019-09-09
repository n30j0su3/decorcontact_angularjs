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
// Módulo de formularios
// import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Módulo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Animaciones & material
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
// Módulo de cliente para usar http
import { HttpClientModule } from '@angular/common/http';
// Módulo de servicios
import { Clientes } from './models/clientes';
import { TestService } from './services/provider';
// import { SelectFormComponent } from './components/contacto/select-form/select-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SelectBrandComponent
    // SelectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule
  ],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
    MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
