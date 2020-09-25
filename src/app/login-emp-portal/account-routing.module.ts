import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
//import { LoginEmpPortalComponent } from './login-emp-portal.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            //{ path: 'login', component: LoginEmpPortalComponent },
            //{ path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }