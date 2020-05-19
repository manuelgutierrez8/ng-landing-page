import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
