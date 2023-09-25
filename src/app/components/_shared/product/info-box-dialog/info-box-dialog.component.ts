import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-box-dialog',
  templateUrl: './info-box-dialog.component.html',
  styleUrls: ['./info-box-dialog.component.css']
})
export class InfoBoxDialogComponent implements OnInit {
  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: ''
};

  constructor(public dialogRef: MatDialogRef<InfoBoxDialogComponent>) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // You can handle the form submission logic here
    // Access the form data using this.formData
    // Close the dialog when done
    this.dialogRef.close();
}
}
