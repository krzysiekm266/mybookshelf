import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BookshelfComponent } from './modules/bookshelf/bookshelf.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  { path: 'bookshelf', loadChildren: () => import('./modules/bookshelf/bookshelf.module').then(m => m.BookshelfModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
