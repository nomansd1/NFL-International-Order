import { Component, OnInit, Input } from '@angular/core';
import { ProductModelComponent } from './product-model/product-model.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoBoxDialogComponent } from './info-box-dialog/info-box-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: any;

  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
  }
  openCartDialog(): void {
    const dialogRef = this.dialog.open(ProductModelComponent, {
      width: '250px', 
      data: this.products, 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  openInfoBoxDialog() {
    const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '800px'; 
        const dialogRef = this.dialog.open(InfoBoxDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
        });
}
}
