import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Presidente', 150000),
    new Empleado('Ana', 'Castro', 'Tesorera', 60000),
    new Empleado('Laura', 'Gonzales', 'Secretaria', 50000),
    new Empleado('Juanita', 'Rocha', 'Asistente de limpieza', 20000),
  ];

  agregarEmpleadoServicio(empleado:Empleado) {
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar" + "\n" + empleado.nombre + "\n" + empleado.salario)
    this.empleados.push(empleado);
  };

  //encontrarEmpleado();

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }
}
