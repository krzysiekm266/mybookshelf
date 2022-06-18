import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  constructor(private _fb: FormBuilder,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.searchForm = this._fb.group({
      search: ['', Validators.min(3)],
    });

  }
  search() {}
}
