import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  categories: any = [];
  foodList: any = [];
  selectedCategory = '';
  searchQuery = '';

  selectedPage = 1;

  pages = [];

  loading = false;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.foodService.getCategories().subscribe(categoriesResponse => {
      this.categories = categoriesResponse.body.data;

      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0].id;

        this.getMenu();
      }
    });
  }

  getMenu() {
    this.toggleLoading();
    this.foodService.getFood(this.selectedCategory, this.searchQuery, this.selectedPage).subscribe(response => {
      this.foodList = response.body.data;

      this.pages = [];
      for (let index = 0; index < response.body.meta.last_page; index++) {
        this.pages.push(index+1);
      }

      this.toggleLoading();
      console.log(response);
    });
  }

  selectCategory(id) {
    if(this.selectedCategory != id) {
      this.selectedCategory = id;
      this.getMenu();
    }

  }

  selectPage(index) {
    if(this.selectedPage != index) {
      this.selectedPage = index;
      this.getMenu();
    }
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

}
