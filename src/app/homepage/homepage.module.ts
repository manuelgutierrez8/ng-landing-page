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
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppSectionComponent } from './app-section/app-section.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomepageComponent, LocationsComponent, TestimonialsComponent, ContactComponent, AppSectionComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SectionsModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class HomepageModule { }
