import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


export interface PeriodicElement {
  Product: string;
  SNo: string;
  Quantity: number;
  Price: string;
  Amount:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SNo: '01', Product: 'Hydrogen', Quantity: 56, Price: '$26.90',Amount:'$1,506.4'},
  {SNo: '02', Product: 'Helium', Quantity: 32, Price: '$26.90',Amount:'$860.8'},
  {SNo: '03', Product: 'Lithium', Quantity: 123, Price: '$26.90' ,Amount:'$3,308.4'},
  {SNo: '04', Product: 'Beryllium', Quantity: 56, Price: '$26.90',Amount:'$1,506.4'},
 
  
];
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})

export class ViewDialogComponent implements OnInit {
  displayedColumns: string[] = ['SNo', 'Product', 'Quantity', 'Price'];
  dataSource = ELEMENT_DATA;
  constructor( private dialogRef: MatDialogRef<any>) { }
  
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  
  ngOnInit(): void {
  }

  getTotalQuantity(): number {
    return this.dataSource.reduce((total, element) => total + element.Quantity, 0);
  }
  
  getTotalProducts(): number {
    return this.dataSource.length;
  }

}
