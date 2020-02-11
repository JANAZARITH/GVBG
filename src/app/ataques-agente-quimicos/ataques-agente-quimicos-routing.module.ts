import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtaquesAgenteQuimicosPage } from './ataques-agente-quimicos.page';

const routes: Routes = [
  {
    path: '',
    component: AtaquesAgenteQuimicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtaquesAgenteQuimicosPageRoutingModule {}
