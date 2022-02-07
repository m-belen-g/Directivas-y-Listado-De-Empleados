import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas y Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Juan","Perez","Presidente",150000),
    new Empleado("Ana","Castro","Tesorera",60000),
    new Empleado("Laura","Gonzales","Secretaria",50000),
    new Empleado("Juanita","Rocha","Asistente de limpieza",20000)


  ];

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  eliminarEmpleado(key:any) {
    //delete empleado[posicion];
    const index = this.empleados.indexOf(key, 0);
      if (index > -1) {
        this.empleados.splice(index, 1);
        };
  }

  

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


}
