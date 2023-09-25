import { Component, OnInit } from '@angular/core';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  emptyblock:string;
  OrderNo: string;
  OrderDate: string;
  RequiredDate: string;
  Price: string;
  OrderStatus: string;
  OrderDetail: string;
  
}


const ELEMENT_DATA: PeriodicElement[] = [
  {emptyblock:'',OrderNo: 'NFL0007', OrderDate: '2023/08/14 10:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'Pending with BDM',OrderDetail:'Your order is confirmed'},
  {emptyblock:'',OrderNo: 'NFL0006', OrderDate: '2023/08/14 1:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'Pending with Finance',OrderDetail:'Your order is hold'},
  {emptyblock:'',OrderNo: 'NFL0005', OrderDate: '2023/08/14 2:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'Pending with Head of Sales',OrderDetail:'2% discount will be applied'},
  {emptyblock:'',OrderNo: 'NFL0004', OrderDate: '2023/08/14 3:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'Pending with Customer',OrderDetail:'hold due to production plan'},
  {emptyblock:'',OrderNo: 'NFL0003', OrderDate: '2023/08/14 4:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'PFI generated',OrderDetail:'Your order is confirmed'},
  {emptyblock:'',OrderNo: 'NFL0002', OrderDate: '2023/08/14 5:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'CO DMCC',OrderDetail:'Your order is hold'},
  {emptyblock:'',OrderNo: 'NFL0001', OrderDate: '2023/08/14 5:30:00', RequiredDate: '2023/08/14', Price: '29,90', OrderStatus: 'Pending with COO',OrderDetail:'Your order is hold'},
];
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})


export class OrderHistoryComponent implements OnInit {
  displayedColumns: string[] = ['emptyblock','OrderNo', 'OrderDate', 'RequiredDate', 'Price','OrderDetail','OrderStatus'];
  dataSource = ELEMENT_DATA;
 
  constructor(private dialog: MatDialog) { }

 

 


  ViewDialog(data: any): void {
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      width: '600px', 
      data: data, 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  ngOnInit(): void {
  }
}