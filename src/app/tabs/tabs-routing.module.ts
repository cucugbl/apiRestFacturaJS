import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Factura',
        loadChildren: () => import('../Factura/Factura.module').then(m => m.FacturaPageModule)
      },
      {
        path: 'Cliente',
        loadChildren: () => import('../Cliente/Cliente.module').then(m => m.ClientePageModule)
      },
      {
        path: 'Producto',
        loadChildren: () => import('../Producto/Producto.module').then(m => m.ProductoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Factura',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Factura',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
