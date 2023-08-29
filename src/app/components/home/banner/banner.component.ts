import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  
  sliderImages = [
    { url: '../../../../assets/home/banner1.jpg' },
    { url: '../../../../assets/home/banner2.jpg' },
    { url: '../../../../assets/home/banner3.jpg' },
    { url: '../../../../assets/home/banner4.jpg' },
    { url: '../../../../assets/home/banner5.jpg' },
  ]

  constructor() { }

    customOptions: OwlOptions = {
      loop: true,
      items: 1,
      dots: true,
      slideTransition: 'fade',
      smartSpeed: 1000,
      navSpeed: 1000,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
    }
  ngAfterViewInit(): void {
      
  }

}
