import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MzDropdownModule } from 'ngx-materialize'// dropdown
import { MzButtonModule } from 'ngx-materialize'// button
import { MzInputModule } from 'ngx-materialize'//input
import { MzIconMdiModule } from 'ngx-materialize'//input
import { MzSelectModule } from 'ngx-materialize'
import { MzRadioButtonModule } from 'ngx-materialize'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MzDropdownModule,
    MzButtonModule,
    MzInputModule,
    MzIconMdiModule,
    MzSelectModule,
    MzRadioButtonModule
  ],
  declarations: [],
  exports:[RouterModule,MzDropdownModule,MzButtonModule,MzInputModule,MzIconMdiModule,MzSelectModule,MzRadioButtonModule]
})
export class UtilsModule { }
