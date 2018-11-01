import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MzDropdownModule } from 'ngx-materialize'// dropdown
import { MzButtonModule } from 'ngx-materialize'// button
import { MzInputModule } from 'ngx-materialize'//input
import { MzIconMdiModule } from 'ngx-materialize'//input

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MzDropdownModule,
    MzButtonModule,
    MzInputModule,
    MzIconMdiModule
  ],
  declarations: [],
  exports:[RouterModule,MzDropdownModule,MzButtonModule,MzInputModule,MzIconMdiModule]
})
export class UtilsModule { }
