import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EmptySearchComponent } from './empty-search/empty-search.component';
import { LoadingComponent } from './loading/loading.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    EmptySearchComponent,
    LoadingComponent,
    ThankYouComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    EmptySearchComponent,
    LoadingComponent,
    ThankYouComponent
  ]
})
export class SectionsModule { }
