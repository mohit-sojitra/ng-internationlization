import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-internationalization';
  siteLocale: string;
  constructor(private router: Router) {
    this.siteLocale = window.location.pathname.split('/')[1];
    console.log(this.siteLocale);
  }
}
