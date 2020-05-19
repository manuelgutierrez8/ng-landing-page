import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { SectionsModule } from '../sections/sections.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationsComponent } from './locations/locations.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [HomepageComponent, LocationsComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    FormsModule,
    SectionsModule,
    BrowserModule
  ]
})
export class HomepageModule { }
