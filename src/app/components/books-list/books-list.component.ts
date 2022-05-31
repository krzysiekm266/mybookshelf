import { Book, BOOKS } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:Book[] = [];
  constructor() { }

  ngOnInit(): void {
    this.books = BOOKS;
  }

}
