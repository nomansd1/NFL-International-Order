import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ProductModificationComponent } from './pages/product-modification/product-modification.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-placed', component: OrderPlacedComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'product-modification', component: ProductModificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
