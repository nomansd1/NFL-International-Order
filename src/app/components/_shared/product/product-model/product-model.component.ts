import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.css']
})
export class ProductModelComponent implements OnInit {
  quantity: number = 1;

  constructor( private dialogRef: MatDialogRef<any>, private router: Router) { }
  navigate(){
    this.router.navigate(['/cart'])
  }
  ngOnInit(): void {
  }
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  incrementQuantity() {
    console.log('Incrementing quantity');
    this.quantity++;
    console.log('New quantity:', this.quantity);
  }
  
  decrementQuantity() {
    console.log('Decrementing quantity');
    if (this.quantity > 1) {
      this.quantity--;
    }
    console.log('New quantity:', this.quantity);
  }
}
