import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacturaPage } from './Factura.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FacturaPageRoutingModule } from './Factura-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FacturaPageRoutingModule
  ],
  declarations: [FacturaPage]
})
export class FacturaPageModule {}
