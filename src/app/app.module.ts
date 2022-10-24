import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import {PorfolioService} from './servicios/porfolio.service';
import{HttpClient, HttpClientModule} from '@angular/common/http'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
//import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { interceptorProvider } from './service/interceptor-service';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    HysComponent,
    HomeComponent,
    LoginComponent,
    LogoApComponent,
    EducacionComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
   // ProyectoComponent,
 
  ],
  imports: [
    BrowserModule,
   FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({"responsive":true}),
     AppRoutingModule   
  ],
  

 
  providers:[
//interceptorProvider,
PorfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
