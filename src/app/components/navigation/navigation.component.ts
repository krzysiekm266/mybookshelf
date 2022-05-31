import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  faXmark = faXmark;
  @Input() menu: string[] = [];
  @Input() open: boolean = false;
  constructor(private _router:Router) {}

  ngOnInit(): void {}
  openMenu() {
    this.open = true;
  }
  closeMenu() {
    this.open = false;
  }
  logout() {
    this.open = false;
    this._router.navigate(['/','bookshelf','login']);
  }
}
