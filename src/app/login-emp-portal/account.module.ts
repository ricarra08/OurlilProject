import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
//import { EMPhomeComponent } from '../emphome/emphome.component';
//import { LoginEmpPortalComponent } from './login-emp-portal.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        //LoginEmpPortalComponent
        //EMPhomeComponent
    ]
})
export class AccountModule { }