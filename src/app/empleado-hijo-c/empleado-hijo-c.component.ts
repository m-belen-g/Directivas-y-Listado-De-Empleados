import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;

  @Input() indice: number;

  @Input() empleados: any[];

  constructor() {}

  ngOnInit(): void {}

  eliminarEmpleado(key: any) {
    //delete empleado[posicion];
    const index = this.empleados.indexOf(key, 0);
    if (index > -1) {
      this.empleados.splice(index, 1);
    }
  }

  
    caracteristicas = [''];
  
    agregarCaracteristica(nuevaCaracteristica: string) {
      
      this.caracteristicas.push(nuevaCaracteristica);
    }
  
}
