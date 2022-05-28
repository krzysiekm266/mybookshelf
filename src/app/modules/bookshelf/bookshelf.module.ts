import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookshelfComponent } from './bookshelf.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    BookshelfComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BookshelfRoutingModule
  ]
})
export class BookshelfModule { }
