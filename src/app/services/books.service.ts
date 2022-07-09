import { Injectable } from '@angular/core';
import {  Observable,of ,} from 'rxjs';

import { Book,BOOKS, } from '../models/book';
// import { Author,AUTHORS } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books:Observable<Book[]> ;
  constructor() {
    this.books = of(BOOKS);
  }
  getBooks():Observable<Book[]>{
    return this.books;
  }
  getBook(id:number):Book {
    let book:Book|undefined = {author:{name:'',id:0},cover:'',description:'',title:'',id:0};
      this.books.subscribe(books => book = books.find(item=>item.id == id) );

    return book;
  }
}
