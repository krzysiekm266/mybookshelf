import { UserService } from './../../services/user.service';
import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { slideInBottomAnimation ,slideInLeftAnimation} from 'src/app/animations/animations';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  animations:[slideInLeftAnimation],

})
export class BookshelfComponent implements OnInit {

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
  // ngOnChanges():void {
  //   this.userName = this._userService.getUserName();
  // }
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
