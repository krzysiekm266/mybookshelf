import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faXmark,faAnglesDown,faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  faXmark = faXmark;
  faAnglesDown = faAnglesDown;
  faFaceSmile = faFaceSmile;
  @Input() menu: string[] = [];
  @Input() open: boolean = false;
  @Input() userMenu:boolean = false;
  constructor(private _router:Router,private _userService:UserService,private _booksService:BooksService) {}

  ngOnInit(): void {}

  openMenu() {
    this.open = true;
  }
  toggleUserMenu() {
    this.userMenu = !this.userMenu;
  }
  closeMenu() {
    this.open = false;
  }

  logout() {
    this.open = false;
    this.userMenu = false;
    this._userService.logout();
    this._booksService.stopService();
    this._router.navigate(['/','bookshelf','login']);

  }

  isUserLogin(): boolean {
   return localStorage.getItem('token') ? true : false ;
  }
  getUserLogin():string {
    return  this.isUserLogin() ? this._userService.getUserName() : '';
  }
}
