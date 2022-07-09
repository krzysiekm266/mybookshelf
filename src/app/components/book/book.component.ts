import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book!: Book;
  constructor(
    private _route: ActivatedRoute,
    private _bookService: BooksService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => { this.book = this._bookService.getBook(params['id'])});
  }
}
