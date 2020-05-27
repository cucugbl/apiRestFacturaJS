import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoPage } from './Producto.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoPageRoutingModule {}
