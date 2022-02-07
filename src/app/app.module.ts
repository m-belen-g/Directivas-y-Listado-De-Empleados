import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'quienessomos',component:QuienesSomosComponent},
  {path:'contacto',component:ContactoComponent}
]
@NgModule({
  
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
