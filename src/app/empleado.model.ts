export class Empleado {

    constructor(nombre:string,apellido:string, cargo:string, salario:number) { //Estos son parametros

        //Una cosa es el campo de clase y otro el parametro, this hace referencia al campo de clase (lo de abajo)
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }

    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;

}