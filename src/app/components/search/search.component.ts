import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  @Input() show:boolean = false;
  searchForm!: FormGroup;
  constructor(private _fb: FormBuilder,private _router:Router,private _bookService:BooksService) {}
  ngOnInit(): void {
    this.searchForm = this._fb.group({
      search: ['', Validators.min(3)],
    });
    //do poprawy
    this.show = true;
  }
  search() {
    let value:string = this.searchForm.get('search')?.value as string;
    console.log(value)
    this._bookService.searchBooks(value).subscribe() ;
    this._router.navigate(['/','bookshelf','books']);
  }
}
