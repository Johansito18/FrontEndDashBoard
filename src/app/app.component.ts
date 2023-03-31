import { DashboardService } from './Service/dashboard.service';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Producto } from './Interface/producto';


import {MatDialog} from '@angular/material/dialog';



import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './Interface/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['idProducto', 'Nombre', 'Descripcion', 'Fecha', 'Acciones'];
  
  totalEmpleados!:number;
  totalEmpleadosActivos!:number;
  totalEmpleadosInactivos!:number;

  totalAreas!:number;
  totalAreasActivas!:number;
  totalAreasInactivas!:number;

  totalEmpleadosNombre!:number;
  totalEstado!:number;
  totalEmpleadosSalario!:number
  totalEmpleadoNumberDocument!:number
  totalEmpleadosEdad!:number;

  totalNombreArea!:number;

  constructor(private dashBoardService:DashboardService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ){
    
  }

  /**
   * ejecuta este metodo al momento de inicializar el servidor
   */
  ngOnInit(): void {
    this.amountAllEmployees();
    this.userAmountAllActiveEmployees();
    this.userAmountAllInactiveEmployees();
    this.amountAllAreas();
    this.amountAllActiveAreas();
    this.amountAllInactiveAreas();
  }

  amountAllEmployees(){
    this.dashBoardService.userAmountAllEmployees().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleados = cantidad;
      },error:(e) =>{}
    })
  }

  userAmountAllActiveEmployees(){
    this.dashBoardService.userAmountAllActiveEmployees().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosActivos = cantidad;
      },error:(e) =>{}
    })
  }

  userAmountAllInactiveEmployees(){
    this.dashBoardService.userAmountAllInactiveEmployees().subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosInactivos = cantidad;
      },error:(e) =>{}
    })
  }

  findAmountOfEmployeesByName(name:string){
    this.dashBoardService.findAmountOfEmployeesByName(name).subscribe({
      next:(cantidad:number) =>{
        this.totalEmpleadosNombre = cantidad;
      },error:(e) =>{}
    })
  }

  amountAllAreas(){
    this.dashBoardService.areaAmountAllAreas().subscribe({
      next:(cantidad:number) =>{       
        this.totalAreas = cantidad;
      },error:(e) =>{}
    })
  }

  amountAllActiveAreas(){
    this.dashBoardService.areaAmountAllActiveAreas().subscribe({
      next:(cantidad:number) =>{
        this.totalAreasActivas = cantidad;
      },error:(e) =>{}
    })
  }

  amountAllInactiveAreas(){
    this.dashBoardService.areaAmountAllInactiveAreas().subscribe({
      next:(cantidad:number) =>{
        this.totalAreasInactivas = cantidad;
      },error:(e) =>{}
    })
  }

  findAmountOfUsersAndAreasByState(state:number){
    this.dashBoardService.findAmountOfUsersAndAreasByState(state).subscribe({
      next:(cantidad:number) =>{
        this.totalEstado = cantidad;
      },error:(e) =>{}
    })
  }

  findAmountOfUsersBySalary(salary:number){
    this.dashBoardService.findAmountOfUsersBySalary(salary).subscribe({
      next:(cantidad:number) =>{
        console.log("total salario " + cantidad);
        this.totalEmpleadosSalario = cantidad;
      },error:(e) =>{}
    })
  }

  findAmountOfUsersByAge(age:number){
    this.dashBoardService.findAmountOfUsersByAge(age).subscribe({
      next:(cantidad:number) =>{
        console.log("total edad " + cantidad);
        this.totalEmpleadosEdad = cantidad;
      },error:(e) =>{}
    })
  }

  findAmountOfUsersByNumberDocument(numberDocument:number){
    this.dashBoardService.findAmountOfUsersByNumberDocument(numberDocument).subscribe({
      next:(cantidad:number) =>{
        
        this.totalEmpleadoNumberDocument = cantidad;
      },error:(e) =>{}
    })
  }
  
  findAmountOfAreasByName(name:string){
    this.dashBoardService.findAmountOfAreasByName(name).subscribe({
      next:(cantidad:number) =>{
        console.log("total nombre area " + cantidad);
        this.totalNombreArea = cantidad;
      },error:(e) =>{}
    })
  }

  
}
