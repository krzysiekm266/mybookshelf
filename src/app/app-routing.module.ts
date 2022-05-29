import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    children: [
      { path: 'books', component: BooksListComponent },
      // { path:'',redirectTo:'books',pathMatch:'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
