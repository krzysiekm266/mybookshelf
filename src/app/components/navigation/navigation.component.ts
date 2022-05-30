import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() menu: string[] = [];
  @Input() open:boolean = false;
  constructor() {}

  ngOnInit(): void {

  }
  openMenu() {
    this.open = true;
  }
  closeMenu() {
    this.open = false;
  }
}
