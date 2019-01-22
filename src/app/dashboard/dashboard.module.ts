import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDComponent } from './index/index.component';
import { UtilsModule } from '../utils/utils.module';
import { DashComponentsModule } from './dash-components/dash-components.module';
import { UniqueComponentsModule } from './unique-components/unique-components.module'

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    DashComponentsModule,
    UniqueComponentsModule

  ],
  declarations: [IndexDComponent],
  exports:[IndexDComponent, DashComponentsModule, UniqueComponentsModule]
})
export class DashboardModule { }
