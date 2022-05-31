import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  @Output() menu:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      'books','about','register',
    ];
  }

}
