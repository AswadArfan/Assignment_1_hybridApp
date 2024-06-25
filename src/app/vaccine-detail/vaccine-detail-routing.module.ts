import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccineDetailPage } from './vaccine-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VaccineDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccineDetailPageRoutingModule {}
