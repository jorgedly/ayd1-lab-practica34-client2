import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  url: string = 'https://analisis1.herokuapp.com/';

  constructor(private http: HttpClient) { }

  obtenerTipoCambioSimplePromesa() {
    return this.http.post(`${this.url}cambio/dia`, {}).toPromise();
  }

  obtenerTipoCambioSimple() {
    return this.http.post(`${this.url}cambio/dia`, {});
  }

  obtenerTipoCambioFechaInicioPromesa(fecha: string) {
    return this.http.post(`${this.url}cambio/fecha`, { fecha }).toPromise();
  }

  obtenerTipoCambioFechaInicio(fecha: string) {
    return this.http.post(`${this.url}cambio/fecha`, { fecha });
  }

}
