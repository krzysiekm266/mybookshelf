import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfComponent } from './bookshelf.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path: '', component:BookshelfComponent},
  { path: 'books', component: BookListComponent,outlet:'content'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
