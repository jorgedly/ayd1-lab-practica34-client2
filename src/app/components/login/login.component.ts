import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  nombres_registro: string = '';
  apellidos_registro: string = '';
  dpi_registro: string = '';
  no_cuenta_registro: string = '';
  email_registro: string = '';
  password_registro: string = '';
  myObj :any;
  item2:any;
  key: any;
  
  constructor(public autentificacionService: AutentificacionService,
    public router: Router) {
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  //---------------------------------------------VARIABLES DE SESSION
  guardarVariable(key, myObj){
    localStorage.setItem(key, JSON.stringify(myObj));
  }

  leerVariable(){
    //localStorage.setItem(key, JSON.stringify(myObj));
  }

  //------------------------------------------------OBTENER DATOS------------------------------------------------//
  onKeyPassLogin(event) {
    this.password = event.target.value;
  }

  onKeyEmailLogin(event) {
    this.email = event.target.value;
  }

  onKeyNombresRegister(event) {
    this.nombres_registro = event.target.value;
  }

  onKeyApellidosRegister(event) {
    this.apellidos_registro = event.target.value;
  }

  onKeyDPIRegister(event) {
    this.dpi_registro = event.target.value;
  }

  onKeyNoCuentaRegister(event) {
    this.no_cuenta_registro = event.target.value;
  }

  onKeyEmailRegister(event) {
    this.email_registro = event.target.value;
  }

  onKeyPasswordRegister(event) {
    this.password_registro = event.target.value;
  }

  //---------------------------------------------------METODOS---------------------------------------------------//
  async login() {
    const resp = await this.autentificacionService.login(this.email, this.password);
    if (resp) {
      if (resp['auth'] === true) {
        localStorage.setItem('nombres', resp['nombres']);
        localStorage.setItem('apellidos', resp['apellidos']);
        localStorage.setItem('no_cuenta', resp['no_cuenta']);
        this.router.navigate(['/', 'home']);
      }
    }
    else
      Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos.',
        text: 'Intente nuevamente'
      })
  }


  async register() {
    const resp = await this.autentificacionService.
      register(this.nombres_registro, this.apellidos_registro, this.dpi_registro, this.no_cuenta_registro, this.email_registro, this.password_registro);

    if (resp) {
      Swal.fire({
        icon: 'success',
        title: 'Datos correctos.',
        text: 'Cuenta registrada correctamente'
      })
      this.router.navigate(['/', 'home']);
    }
    else
      Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos.',
        text: 'No se ha podido registrar la cuenta'
      })
  }

}
