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
    // this.books$.pipe(
    //   map(books => {
    //      return books.find(book => book.id == id)
    //   }),
    // ).subscribe(book => this.book = book as Book);
    //   return of(this.book);
    return this.books$.pipe(
      map(books => {
         return books.find(book => book.id == id)
      }) ,
    ) as Observable<Book>;


  }

  //do poprawy
  searchBooks(title:string) {

    if(title) {
      this.books$ = this.books$.pipe(
        filter( (books,index) => { return books[index].title.includes(title,0) }),
        tap(books => console.log(books))

      );
        this.books$.subscribe();
    }
    else {
      this.books$ = this.allBooks$;
      this.books$.subscribe();
    }
    return this.books$;
    // return title !=''
    // ? this.books$ = this.books$.pipe(
    //   // map(books => {
    //   //   return books.filter( (book) => { book.title.includes(title) } );
    //   // }),
    //   filter( (books,index) => { return books[index].title.includes(title,0)} ),
    //   tap(books => console.log(books))
    // )
    // : this.allBooks$.subscribe();

  }
};
