import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookshelfComponent } from './bookshelf.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';


@NgModule({
  declarations: [
    BookshelfComponent,
    NavigationComponent,
    FooterComponent,
    BookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookshelfRoutingModule,
  ],
})
export class BookshelfModule { }
