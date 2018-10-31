import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MzDropdownModule } from 'ngx-materialize'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MzDropdownModule
  ],
  declarations: [],
  exports:[RouterModule,MzDropdownModule]
})
export class UtilsModule { }
