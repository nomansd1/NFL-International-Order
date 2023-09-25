import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterModule } from '@angular/router';
import { CategoryComponent } from 'src/app/pages/category/category.component';
RouterModule.forRoot([
  { path: 'category', component: CategoryComponent},
]);
@Component({
  selector: 'shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})


export class ShopByCategoryComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    items: 5,
    dots: false,
    slideTransition: 'linear',
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    margin: 10,
    responsive: {
      0: {
        items: 1 
      },
      450: {
        items: 2
      },
      768: {
        items: 3 
      },
      1200: {
        items: 5 
      }
    },
    nav: true,
    navText: ['<', '>']
  }

  categories = [
    { title: 'Masala Seasoning', totalProducts: 20 },
    { title: 'pickles', totalProducts: 20 },
    { title: 'recipe mixes', totalProducts: 20 },
    { title: 'sauces', totalProducts: 20 },
    { title: 'crushes pickles', totalProducts: 20 },
    { title: 'crushes pickles', totalProducts: 20 },
  ]

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/category'])
  }
  ngOnInit(): void {
  }

}
