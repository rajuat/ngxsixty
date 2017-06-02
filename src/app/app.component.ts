import { Component } from '@angular/core';
import { HeaderService } from "app/header/header.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  openClose: boolean = true;

  constructor(private sns: HeaderService) { }

  toggleSideNav() {
    this.sns.toggle();
  }

  isOpen() {
    return true;
  }
}
