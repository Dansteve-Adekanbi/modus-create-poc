import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WebPublicLayoutComponent } from './web-public-layout/web-public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    WebPublicLayoutComponent
  ],
  exports: [
    WebPublicLayoutComponent
  ]
})
export class SharedLayoutComponentsModule { }
