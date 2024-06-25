import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'canada-summary',
        loadChildren: () => import('../canada-summary/canada-summary.module').then(m => m.CanadaSummaryModule)
      },
      {
        path: 'ontario',
        loadChildren: () => import('../ontario/ontario.module').then(m => m.OntarioModule)
      },
      {
        path: '',
        redirectTo: '/tabs/canada-summary',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

