import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoPage } from './Producto.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProductoPageRoutingModule } from './Producto-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ProductoPage }]),
    ProductoPageRoutingModule,
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
