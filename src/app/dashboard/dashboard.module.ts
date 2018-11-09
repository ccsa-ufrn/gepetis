import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDComponent } from './index/index.component';
import { UtilsModule } from '../utils/utils.module';
import {DashComponentsModule} from './dash-components/dash-components.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule

  ],
  declarations: [IndexDComponent],
  exports:[IndexDComponent,DashComponentsModule ]
})
export class DashboardModule { }
