import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';
import { OntarioSummaryComponent } from '../ontario/ontario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
  ],
  declarations: [
    Tab2Page,
    OntarioSummaryComponent 
  ]
})
export class Tab2PageModule {}
