import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User;
  private _loginSucess: boolean = false;

  constructor() {
    localStorage.removeItem('token')
    this._user = {
      name: 'quest',
      email: 'quest@quest.mail',
      password: 'quest',
      token: 'quest-token',
    };
  }

  loginStatus(): boolean {
    return this._loginSucess == undefined ? false : this._loginSucess;
  }

  getUserName(): string {
    return   this._loginSucess ? this._user.name : '';
  }

  getUserToken(): string {
    return this._user.token;
  }

  login(email: string, password: string): boolean {
    if (email === this._user.email && password === this._user.password) {
      localStorage.setItem('token', this._user.token);
      this._loginSucess = true;
      return true;
    }
    this._loginSucess = false;
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this._loginSucess = false;
  }
}
