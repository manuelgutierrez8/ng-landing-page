import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsModule } from '../sections/sections.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationsComponent } from './locations/locations.component';



@NgModule({
  declarations: [HomepageComponent, LocationsComponent],
  imports: [
    CommonModule,
    SectionsModule
  ]
})
export class HomepageModule { }
