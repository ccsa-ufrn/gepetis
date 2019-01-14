import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MzDropdownModule } from 'ngx-materialize'// dropdown
import { MzButtonModule } from 'ngx-materialize'// button
import { MzInputModule } from 'ngx-materialize'//input
import { MzIconMdiModule } from 'ngx-materialize'//input
import { MzSelectModule } from 'ngx-materialize' //select
import { MzRadioButtonModule } from 'ngx-materialize' //radio button
import { MzModalModule } from 'ngx-materialize' //modal

import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';// mde editor de texto grande
import { FormsModule } from '@angular/forms';           // to use in forms

import { ColorPickerModule } from 'node_modules/ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MzDropdownModule,
    MzButtonModule,
    MzInputModule,
    MzIconMdiModule,
    MzSelectModule,
    MzRadioButtonModule,
    EditorModule,
    ReactiveFormsModule,
    MzModalModule,
    FormsModule,
    ColorPickerModule



  ],
  declarations: [],
  exports:[RouterModule,MzDropdownModule,MzButtonModule,MzInputModule,MzIconMdiModule,
    MzSelectModule,MzRadioButtonModule,EditorModule, ReactiveFormsModule,MzModalModule,FormsModule,
    ColorPickerModule]
})
export class UtilsModule { }
