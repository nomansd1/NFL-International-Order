import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  orderDetailsOne = [
    { title: 'order cartons', value: 12 },
    { title: 'order value', value: '$.313.00' },
    { title: 'Required Dispatched date', value: '31/08/2023' },
  ]
  orderDetailsTwo = [
    { title: 'Contain max volume', value: '10X10' },
    { title: 'container volume Percentage', value: '40%' },
  ]
  orderDetailsThree = [
    { title: 'Contain max weight', value: '800 KG' },
    { title: 'container weight volume', value: '40%' },
  ]
  orderDetailsFour = [
    { title: 'Volume is fine', value: 'YES' },
    { title: 'Weight is fine', value: 'NO' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
