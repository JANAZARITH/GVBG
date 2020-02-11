import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquesAgenteQuimicosPageRoutingModule } from './ataques-agente-quimicos-routing.module';

import { AtaquesAgenteQuimicosPage } from './ataques-agente-quimicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtaquesAgenteQuimicosPageRoutingModule
  ],
  declarations: [AtaquesAgenteQuimicosPage]
})
export class AtaquesAgenteQuimicosPageModule {}
