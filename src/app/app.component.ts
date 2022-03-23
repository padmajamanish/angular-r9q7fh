import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';

  frmLogin = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-z]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  getData() {
    console.warn(this.frmLogin.value);
  }

  get name() {
    return this.frmLogin.get('name');
  }
  get password() {
    return this.frmLogin.get('password');
  }
}
