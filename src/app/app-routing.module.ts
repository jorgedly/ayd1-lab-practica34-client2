import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultarSaldoComponent } from './components/consultar-saldo/consultar-saldo.component';
import { TipocambioComponent } from './components/tipocambio/tipocambio.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'tipocambio',
    pathMatch: 'full',
    component: TipocambioComponent
  },
  {
    path: 'consultarSaldo',
    pathMatch: 'full',
    component: ConsultarSaldoComponent
  },
  {
    path: 'transference',
    pathMatch: 'full',
    component: TransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
