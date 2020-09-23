import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrfComponent } from './trf/trf.component';

const routes: Routes = [
  { path: 'trf', component: TrfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
