import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetailsService} from '../../../shared/service/user-details.service';
import {LoginService} from '../../../shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _userService: UserDetailsService, private _loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(2)]),
        password: new FormControl('', [Validators.required])
      }
    );
  }

  login() {
    event.preventDefault();
    this._loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(next => {
      this._userService.saveToken(next);
      console.log(next);
    }, error => {
      console.error(error);
    });
    console.log(this._userService.getAccessToken());
  }
}
