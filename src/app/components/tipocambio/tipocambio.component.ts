import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/public-api';
import { ConexionService } from 'src/app/services/conexion.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tipocambio',
  templateUrl: './tipocambio.component.html',
  styleUrls: ['./tipocambio.component.scss']
})
export class TipocambioComponent implements OnInit {

  cambioSimple: number;
  cambios: Cambio[];
  limite: Date;

  displayedColumns: string[] = ['fecha', 'venta', 'compra'];
  dataSource: MatTableDataSource<Cambio>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private conexion: ConexionService
  ) {
    this.cambioSimple = 0;
    this.cambios = [];
    this.limite = new Date();
    this.dataSource = new MatTableDataSource([]);
  }

  async ngOnInit() {
    this.cambioSimple = await this.conexion.obtenerCambioSimplePromesa();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async cambiar(event: MatDatepickerInputEvent<Date>) {
    const fecha = event.value;
    const dato = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    this.cambios = await this.conexion.obtenerTipoCambioFechaInicioPromesa(dato);
    if (!(this.cambios instanceof Array)) {
      this.cambios = [this.cambios];
    }
    this.dataSource.data = this.cambios;
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface Cambio {
  moneda: string;
  fecha: string;
  venta: string;
  compra: string;
}
