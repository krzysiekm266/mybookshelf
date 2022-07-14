import { Book } from './../../models/book';
import { Component, Input, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { faList } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],


})
export class BooksListComponent implements OnInit,DoCheck {
  //font awsome icons
  faList = faList;
  //properties
  @Input() books:Book[] ;

  constructor( private _booksService:BooksService) {
    this.books = [];
   }

  ngDoCheck(): void {
    if(this._booksService.searchExecuted()) {
      this.ngOnInit();
    }
  }


  ngOnInit(): void {

    this._booksService.getBooks()?.subscribe(books => this.books = books);

  }


}
