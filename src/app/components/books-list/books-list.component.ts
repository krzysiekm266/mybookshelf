import { Book, BOOKS } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],


})
export class BooksListComponent implements OnInit {
  books:Book[] = [];
  constructor( private _booksService:BooksService) { }

  ngOnInit(): void {
    this._booksService.getBooks().subscribe(books => this.books = books);
  }


}
