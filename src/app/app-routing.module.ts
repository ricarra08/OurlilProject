import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EMPhomeComponent } from './emphome/emphome.component';
import { TrfComponent } from './trf/trf.component';
import { LoginEmpPortalComponent} from './login-emp-portal/login-emp-portal.component';
import { LoginDsComponent } from './login-ds/login-ds.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./login-emp-portal/account.module').then(x=> x.AccountModule);
//users module used for approving/denying 

const routes: Routes = [
  { path: 'emplogin', component: LoginEmpPortalComponent},  
  { path: 'trf', component: TrfComponent},
  { path: 'emphome', component: EMPhomeComponent, canActivate:[AuthGuard]},
  { path: 'dslogin', component: LoginDsComponent},

  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
