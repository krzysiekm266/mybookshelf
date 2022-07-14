import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  //font awsome icon
  faArrowRotateLeft = faArrowRotateLeft;
  //properties
  @Input() show:boolean = false;
  searchForm!: FormGroup;
  constructor(private _fb: FormBuilder,private _router:Router,private _bookService:BooksService) {}

  ngOnInit(): void {
    this.searchForm = this._fb.group({
      search: ['', Validators.min(3)],
    });
    this.show = true;
  }

  search() {
    let value = this.searchForm.get('search')?.value as string;
    this._bookService.searchBooks(value) ;
    this._router.navigate(['/','bookshelf','books']);
  }

  resetSearch() {
    this.searchForm.get('search')?.setValue('');
    this.search();
  }
}
