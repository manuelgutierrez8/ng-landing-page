import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EmptyFoodSearchComponent } from './empty-food-search/empty-food-search.component';
import { SectionsModule } from '../sections/sections.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MenuPageComponent, FoodListComponent, EmptyFoodSearchComponent],
  imports: [
    CommonModule,
    SectionsModule,
    FormsModule
  ]
})
export class MenuModule { }
