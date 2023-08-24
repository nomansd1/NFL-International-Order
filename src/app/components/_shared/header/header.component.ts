import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { title: 'recipe mixes', url: '' },
    { title: 'masala seasonings', url: '' },
    { title: 'pickles', url: '' },
    { title: 'sauces & chutneys', url: '' },
    { title: 'deserts', url: '' },
    { title: 'ginger & garlic pastes', url: '' },
    { title: 'spices', url: '' },
    { title: 'pink salt', url: '' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
