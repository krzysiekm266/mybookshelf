import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, Observable,of ,} from 'rxjs';
import { filter,find ,map} from "rxjs/operators";

import { Book,BOOKS, } from '../models/book';
// import { Author,AUTHORS } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books$:Observable<Book[]> ;
  allBooks$:Observable<Book[]> ;
  book!:Book;

  constructor() {
    this.books$ = of(BOOKS);
    this.allBooks$ = of(BOOKS);

  }
  getBooks():Observable<Book[]>{

    return this.books$;
  }

  // getBook(id:number):Observable<Book|undefined>{
  //   //let book:Book|undefined = {author:{name:'',id:0},cover:'',description:'',title:'',id:0};
  //   this.books$.subscribe(books => this.book= books.find(item => item.id == id) );
  //   return of(this.book);
  // }
  getBook(id:number):Observable<Book> {
    this.books$.pipe(
      map(books => {
         return books.find(book => book.id == id)
      }),
    ).subscribe(book => this.book = book as Book);
      return of(this.book);

  }

  //do poprawy
  searchBooks(title:string):Observable<Book[]> {
    if(title != '') {
      this.books$ = this.books$.pipe(
        map(books => {
          return books.filter( (book) => { book.title.includes(title) } );
        })
      );
    }

    return  title == '' ?  this.allBooks$ : this.books$;
  }
};
