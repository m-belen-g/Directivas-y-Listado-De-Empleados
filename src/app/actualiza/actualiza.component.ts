import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {} //Servicio de enrutamiento

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  indice:number;

  empleados: Empleado[] = [];
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice=this.route.snapshot.params["id"];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice)
  }

  volverHome() {
    this.router.navigate(['']); // Podria ser contacto
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([''])
  }

}
