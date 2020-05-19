import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'menu', component: MenuPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
