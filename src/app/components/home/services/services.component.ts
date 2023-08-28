import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    { url: '../../../../assets/home/serv1.png', title: 'USA wide delivery', desc: 'get doorstep delivery' },
    { url: '../../../../assets/home/serv2.png', title: 'safe payment', desc: 'safe payment methods' },
    { url: '../../../../assets/home/serv3.png', title: 'safe payment', desc: 'safe payment methods' },
    { url: '../../../../assets/home/serv4.png', title: 'safe payment', desc: 'safe payment methods' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
