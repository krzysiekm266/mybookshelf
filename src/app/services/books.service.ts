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
  books$:Observable<Book[]> ;
  allBooks$:Observable<Book[]> ;
  search:boolean;
  constructor() {
    this.books$ = of(BOOKS);
    this.allBooks$ = of(BOOKS);
    this.search = false;

  }

  getBooks():Observable<Book[]>{

    return this.books$;
  }

  getBook(id:number):Observable<Book> {

    return this.books$.pipe(
      map(books => {
         return books.find(book => book.id == id)
      }) ,
    ) as Observable<Book>;

  }
  searchExecuted() {
    return this.search = true ;
  }
  //do poprawy
  searchBooks(title:string):Observable<Book[]> {
    this.search = false;
    this.books$ = this.allBooks$;
    if(title != '') {
      this.books$ = this.books$.pipe(
        map( books => {
          return books.filter( (books,index) => { return books.title.includes(title) })

        }),
        //tap(books => console.log('Search fraze: '+ title +' find: ' + books.length)),
      );

    }
    else {
      this.books$ = this.allBooks$;

    }
    this.searchExecuted();
    return this.books$;

  }
};
