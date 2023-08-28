import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts = [
    {
      title: 'Pizza',
      category: 'Fast Food'
    },
    {
      title: 'Burger',
      category: 'Fast Food'
    },
    {
      title: 'Salad',
      category: 'Healthy Food'
    },
    {
      title: 'Pasta',
      category: 'Italian Cuisine'
    },
    {
      title: 'Sushi',
      category: 'Japanese Cuisine'
    },
    {
      title: 'Burger',
      category: 'Fast Food'
    },
    {
      title: 'Salad',
      category: 'Healthy Food'
    },
    {
      title: 'Pasta',
      category: 'Italian Cuisine'
    },
    {
      title: 'Sushi',
      category: 'Japanese Cuisine'
    },
    {
      title: 'Salad',
      category: 'Healthy Food'
    },
    {
      title: 'Pasta',
      category: 'Italian Cuisine'
    },
    {
      title: 'Sushi',
      category: 'Japanese Cuisine'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
