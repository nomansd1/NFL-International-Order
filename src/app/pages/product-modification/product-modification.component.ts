import { Component, OnInit } from '@angular/core';
import { FileHandle } from 'src/app/dragDrop.directives';


@Component({
  selector: 'app-product-modification',
  templateUrl: './product-modification.component.html',
  styleUrls: ['./product-modification.component.css']
})
export class ProductModificationComponent implements OnInit {
  name = 'Angular 5';
  files: FileHandle[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  // filesDropped(event: any): void {
  //   debugger
  //   const files: FileHandle[] = event;
  //   this.files = files;
  // }
  filesDropped(event: any): void {
    const files: FileHandle[] = event;
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
}
