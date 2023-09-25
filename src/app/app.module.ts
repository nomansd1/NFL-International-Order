import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import the module

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTabsModule } from '@angular/material/tabs';


import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ShopByCategoryComponent } from './components/home/shop-by-category/shop-by-category.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategorySidebarComponent } from './components/category/category-sidebar/category-sidebar.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartFormComponent } from './components/cart/cart-form/cart-form.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { FeaturedProductsComponent } from './components/home/featured-products/featured-products.component';
import { ProductComponent } from './components/_shared/product/product.component';
import { SubBannerComponent } from './components/home/sub-banner/sub-banner.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ReviewsComponent } from './components/home/reviews/reviews.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ViewDialogComponent } from './pages/order-history/view-dialog/view-dialog.component';
import { ProductModelComponent } from './components/_shared/product/product-model/product-model.component';
import { InfoBoxDialogComponent } from './components/_shared/product/info-box-dialog/info-box-dialog.component';
import { FormsModule } from '@angular/forms';
import { ProductModificationComponent } from './pages/product-modification/product-modification.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ShopByCategoryComponent,
    CategoryComponent,
    CategorySidebarComponent,
    OrderPlacedComponent,
    CartComponent,
    CartFormComponent,
    CartProductComponent,
    FeaturedProductsComponent,
    ProductComponent,
    SubBannerComponent,
    ServicesComponent,
    ReviewsComponent,
    OrderHistoryComponent,
    ViewDialogComponent,
    ProductModelComponent,
    InfoBoxDialogComponent,
    ProductModificationComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
