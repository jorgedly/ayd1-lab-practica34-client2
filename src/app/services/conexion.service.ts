import { Injectable } from '@angular/core';
import { ConsumoService } from './consumo.service';
import { Cambio } from '../components/tipocambio/tipocambio.component';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private consumo: ConsumoService) { }

  async obtenerCambioSimplePromesa(): Promise<number> {
    return await this.consumo.obtenerTipoCambioSimplePromesa() as number;
  }

  obtenerCambioSimple() {
    return this.consumo.obtenerTipoCambioSimple();
  }

  async obtenerTipoCambioFechaInicioPromesa(fecha: string): Promise<Cambio[]> {
    return await this.consumo.obtenerTipoCambioFechaInicioPromesa(fecha) as Cambio[];
  }

  obtenerTipoCambioFechaInicio(fecha: string) {
    return this.consumo.obtenerTipoCambioFechaInicio(fecha);
  }

}
