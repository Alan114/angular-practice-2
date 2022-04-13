import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp2';

  testProp = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  profileTwo = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  constructor(private router: Router, private fb: FormBuilder) {
    this.router.events.subscribe((e) => {
      console.log(e);
    });
  }

  goToRoute(route: string = '/fourth'): void {
    this.router.navigateByUrl(route).then(() => {
      console.log(this.router.url);
    });
  }

  modifyFormControl(): void {
    this.testProp.setValue('');
  }
}
