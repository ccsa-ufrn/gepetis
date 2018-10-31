import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDComponent } from './index/index.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule

  ],
  declarations: [IndexDComponent],
  exports:[IndexDComponent]
})
export class DashboardModule { }
