import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanadaSummaryComponent } from './canada-summary.component';

const routes: Routes = [
  {
    path: '',
    component: CanadaSummaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanadaSummaryRoutingModule {}
