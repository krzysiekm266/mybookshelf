import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit ,OnDestroy{
  book!: Book;
  constructor(
    private _route: ActivatedRoute,
    private _bookService: BooksService
  ) {}
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._bookService.getBook(params['id']).subscribe(book => this.book = book)
    });
  }

}
