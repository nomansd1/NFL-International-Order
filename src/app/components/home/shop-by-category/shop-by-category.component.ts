import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    items: 4,
    dots: false,
    slideTransition: 'linear',
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 9999,
    autoplayHoverPause: false,
    nav: false,
    center: true,
  }

  categories = [
    { title: 'Masala Seasoning', totalProducts: 20 },
    { title: 'pickles', totalProducts: 20 },
    { title: 'recipe mixes', totalProducts: 20 },
    { title: 'sauces', totalProducts: 20 },
    { title: 'crushes pickles', totalProducts: 20 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
