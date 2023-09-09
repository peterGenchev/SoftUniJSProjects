import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
 import { MyOrderListComponent } from './component/my-orders/my-orders.component';
import { SearchComponent } from './component/search/search.component';
import { DetailsComponent } from './component/details/details.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'menu', component: MenuComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'restaurants', component: RestaurantsComponent },

  { path: 'my-orders', component: MyOrderListComponent },

  { path: 'search', component: SearchComponent },

  { path: 'details/:orderId', component: DetailsComponent },
  
  { path: '**', component: PageNotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
