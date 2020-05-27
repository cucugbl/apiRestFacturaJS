import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaPage } from './Factura.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaPageRoutingModule {}
