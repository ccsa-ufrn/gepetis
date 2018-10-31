import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { UtilsModule } from '../../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [ComponentsComponent, HeaderComponent, CoverComponent, AboutComponent, EventsComponent],
  exports:[[ComponentsComponent, HeaderComponent, CoverComponent, AboutComponent, EventsComponent]]
})
export class ComponentsModule { }
