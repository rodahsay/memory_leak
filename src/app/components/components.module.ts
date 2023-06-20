import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ComponentThreeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ComponentThreeComponent
  ]
})
export class ComponentsModule { }
