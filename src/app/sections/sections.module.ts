import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EmptySearchComponent } from './empty-search/empty-search.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    EmptySearchComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    EmptySearchComponent,
    LoadingComponent
  ]
})
export class SectionsModule { }
