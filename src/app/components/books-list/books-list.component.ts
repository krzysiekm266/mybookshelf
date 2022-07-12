import { Book, BOOKS } from './../../models/book';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable,of,map } from 'rxjs';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],


})
export class BooksListComponent implements OnInit,OnChanges {
  @Input() books:Book[] = [];


  constructor( private _booksService:BooksService) {

   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    this._booksService.getBooks().subscribe(books => this.books = books);

  }

  ngOnInit(): void {

    this._booksService.getBooks().subscribe(books => this.books = books);


  }


}
