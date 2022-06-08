import { Component, OnInit, Output } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInRightAnimation ,slideInLeftAnimation} from 'src/app/animations/animations';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  animations:[slideInLeftAnimation]

})
export class BookshelfComponent implements OnInit {
  @Output() menu:string[] = [];

  constructor() { }

  prepareRoute(outlet:RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {

    this.menu = [
      'books','about','register',
    ];
  }

}
