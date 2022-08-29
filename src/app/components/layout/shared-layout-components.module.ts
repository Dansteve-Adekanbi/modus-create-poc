import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    PublicLayoutComponent
  ],
  exports: [
    PublicLayoutComponent
  ]
})
export class SharedLayoutComponentsModule { }
