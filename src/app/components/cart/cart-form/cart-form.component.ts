import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  orderDetailsOne = [
    { title: 'order cartons', value: 0 },
    { title: 'discount', value: 0 },
    { title: 'shipping cost', value: 0 },
  ]
  orderDetailsTwo = [
    { title: 'order due date', value: 0 },
    { title: 'container volume', value: 0 },
    { title: 'container maximum load', value: 0 },
  ]
  orderDetailsThree = [
    { title: 'order gross weight', value: 0 },
    { title: 'container weight volume', value: 0 },
    { title: 'container volume status', value: 0 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
