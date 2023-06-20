import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOnePageRoutingModule } from './page-one-routing.module';

import { PageOnePage } from './page-one.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOnePageRoutingModule
  ],
  declarations: [PageOnePage],
  entryComponents: [PageOnePage]
})
export class PageOnePageModule {}
