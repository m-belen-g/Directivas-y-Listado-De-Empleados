import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();


  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristica(value: string) {
    //this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
