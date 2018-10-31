import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UtilsModule } from '../utils/utils.module';
import { ComponentsModule } from './components/components.module'

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    ComponentsModule

  ],
  declarations: [IndexComponent],
  exports:[IndexComponent]
})
export class ViewpageModule { }
