import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp2';
  constructor(private router: Router) {}

  goToRoute(route: string = '/fourth'): void {
    this.router.navigateByUrl(route);
  }
}
