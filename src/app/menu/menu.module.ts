import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EmptyFoodSearchComponent } from './empty-food-search/empty-food-search.component';



@NgModule({
  declarations: [MenuPageComponent, FoodListComponent, EmptyFoodSearchComponent],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
