import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book!:Book;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params => {  this.book =  params['book'] } );
  }


  ngOnInit(): void {
  }

}
