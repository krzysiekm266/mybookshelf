import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [

  {
    path: 'bookshelf',
    component: BookshelfComponent,data:{animation:'slideInRightAnimation'},
    children: [
      { path: 'books', component: BooksListComponent ,data:{animation:'booksAnimation'}},
      {path: 'register',component:RegisterComponent,data:{animation:'registerAnimation'}},
      {path:'login',component:LoginComponent,data:{animation:'loginAnimation'}},
      {path:'about',component:AboutComponent ,data:{animation:'aboutAnimation'}},
      { path:'',redirectTo:'books',pathMatch:'full'}
    ],
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo:'welcome',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}