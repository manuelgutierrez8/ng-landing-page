import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'

import { CommonModule } from '@angular/common';
import { SectionsModule } from '../sections/sections.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [HomepageComponent, LocationsComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    SectionsModule
  ]
})
export class HomepageModule { }
