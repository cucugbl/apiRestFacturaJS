import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientePage } from './Cliente.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ClientePageRoutingModule } from './Cliente-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ClientePageRoutingModule
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
