import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {
  url_api = 'https://analisis1.herokuapp.com';

  constructor(public httpClient: HttpClient) { }

  getConsulta(no_cuenta){
    const data = {no_cuenta}
    const url = `${this.url_api}/getSaldos`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        console.log("saldo deb"+resp);
        resolve(resp);
      });
    });
  }

  getSaldoDeb(cuenta_origen){
    const data = {cuenta_origen}
    const url = `${this.url_api}/getSaldoDeb`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        console.log("saldo deb"+resp);
        resolve(resp);
      });
    });
  }

  getSaldoCre(cuenta_destino){
    const data = {cuenta_destino}
    const url = `${this.url_api}/getSaldoCre`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        console.log("saldo cre"+resp);
        resolve(resp);
      });
    });
  }

}
