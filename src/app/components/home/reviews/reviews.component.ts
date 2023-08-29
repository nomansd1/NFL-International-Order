import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    slideTransition: 'fade',
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 9999,
    autoplayHoverPause: false,
  }

  customerReviews = [
    {
      url: '../../../../assets/home/c1.jpg',
      name: 'John Doe',
      country: 'USA',
      message: 'I absolutely loved the product! The quality exceeded my expectations.'
    },
    {
      url: '../../../../assets/home/c2.jpg',
      name: 'Jane Smith',
      country: 'Canada',
      message: 'Great experience using your products. Will definitely buy again.'
    },
    {
      url: '../../../../assets/home/c3.jpg',
      name: 'Carlos Rodriguez',
      country: 'Mexico',
      message: 'The products are fantastic. They arrived quickly and in perfect condition.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
