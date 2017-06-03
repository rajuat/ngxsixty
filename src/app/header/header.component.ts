import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [];
  constructor() { }

  ngOnInit() {
    this.links = [
       {
        name: 'Home',
        link: '/'
      },
      {
        name: 'The X360 Lifestyle',
        link: '/about'
      },
      {
        name: 'About Crossfit',
        link: '/crossfit',
      },
      {
        name: 'About Zone Diet',
        link: '/diet',
      },
      {
        name: 'Book Free Trail',
        link: '/contact',
      },
      {
        name: 'Contact Us',
        link: '/contact',
      }
    ];

  }

}
