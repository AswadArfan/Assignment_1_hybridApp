import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OntarioComponent } from './ontario.component';


const routes: Routes = [
  {
    path: '',
    component: OntarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntarioPageRoutingModule {}

