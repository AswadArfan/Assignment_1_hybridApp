import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CanadaSummaryComponent } from './canada-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CanadaSummaryComponent
      }
    ])
  ],
  declarations: [CanadaSummaryComponent]
})
export class CanadaSummaryModule {}