import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faLess } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  private _loginFail:boolean = false;
  constructor(private _fb:FormBuilder,private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required]],
    });


  }
  login():boolean {
    let login:boolean = this._userService.login(
      this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string,
    );

    if(login) {
      this.loginForm.get('email')?.setValue('');
      this.loginForm.get('password')?.setValue('');
      this._router.navigate(['/','bookshelf','books']);
      return true;
    }
    else {
      this._loginFail = true;
      return false;
    }

  }

  checkLoginAttemp() {
    return this._loginFail;
  }

  clearLoginFailMsg() {
    this._loginFail = false;
  }
  //for demo version
  paste() {
    this.loginForm.get('email')?.setValue('guest@guest.mail');
    this.loginForm.get('password')?.setValue('guest');

  }
}
