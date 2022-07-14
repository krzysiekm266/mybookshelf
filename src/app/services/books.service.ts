import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, Observable,of ,} from 'rxjs';
import { filter,find ,map, tap} from "rxjs/operators";

import { Book,BOOKS, } from '../models/book';
// import { Author,AUTHORS } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books$:Observable<Book[]> | undefined;
  allBooks$:Observable<Book[]> ;
  search:boolean;
  private serviceStart:boolean;

  constructor() {
    this.books$ = of(BOOKS);
    this.allBooks$ = of(BOOKS);
    this.search = false;
    this.serviceStart = false;


  }
  stopService() {
    this.books$ = undefined;
    return this.serviceStart = false;
  }
  startService() {
    this.books$ = this.allBooks$;
    this.serviceStart = true;
  }
  getBooks():Observable<Book[]> | undefined {

    return this.serviceStart ? this.books$ : undefined;
  }

  getBook(id:number):Observable<Book> {

    return this.books$?.pipe(
      map(books => {
         return books.find(book => book.id == id)
      }) ,
    ) as Observable<Book>;

  }

  searchExecuted() {
    return this.search = true ;
  }

  searchBooks(title:string):Observable<Book[]> {
    this.search = false;
    this.books$ = this.allBooks$;
    if(title != '') {
      this.books$ = this.books$.pipe(
        map( books => {
          return books.filter( (book) => {
            return book.title.toLowerCase().includes(title.toLowerCase());
          })

        }),
      );

    }
    else {
      this.books$ = this.allBooks$;

    }
    this.searchExecuted();
    return this.books$;

  }
};
