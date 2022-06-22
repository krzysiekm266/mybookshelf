import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User;

  constructor() {
    this._user = {
      name:'quest',
      email:'quest@quest.mail',
      password:'quest',
      token:'quest-token'
    };
  }

  getUserName():string {
    return this._user.name;
  }

  getUserToken():string {
    return this._user.token;
  }

  login(email:string,password:string):boolean {
    if(email === this._user.email && password === this._user.password){
      localStorage.setItem('token',this._user.token);
      return true;
    }
    return false;

  }

  logout() {
    localStorage.removeItem('token');
  }
}
