import { UserService } from './../../services/user.service';
import { Component, Input, OnInit,} from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { slideInLeftAnimation} from 'src/app/animations/animations';
import { faFaceSmile} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  animations:[slideInLeftAnimation],

})
export class BookshelfComponent implements OnInit {
  //font awsome icons
  faFaceSmile = faFaceSmile;
  //properties
  menu:string[] = [];
  @Input() userName!:string;

  constructor(private _userService:UserService, private _router:Router) {

  }

  prepareRoute(outlet:RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {

    this.menu = [
      'books','about','register',
    ];


  }

  userLogin():boolean {

    return  this._userService.loginStatus();
  }
  login():string {
    this.userName = this._userService.getUserName();
    return this.userName;
  }
  logout() {
    this.userName = '';
    this._userService.logout();
    this._router.navigate(['/','bookshelf','login']);

  }

}
