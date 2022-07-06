import { Book, BOOKS } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],


})
export class BooksListComponent implements OnInit {
  books:Book[] = [];
  //constructor(private contexts: ChildrenOutletContexts) { }
  constructor( ) { }

  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }
  ngOnInit(): void {
    this.books = BOOKS;
  }


}
