import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private _fb:FormBuilder,private _userService:UserService) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required]],
    });


  }
  login():boolean {
    return this._userService.login(
      this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string,
    );
  }
}
