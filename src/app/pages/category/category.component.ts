import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
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
      title: 'Pasta',
      category: 'Italian Cuisine'
    },
    {
      title: 'Pasta',
      category: 'Italian Cuisine'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
