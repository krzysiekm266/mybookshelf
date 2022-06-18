import { Component, Input, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  faCircleXmark = faCircleXmark;
  faCircleCheck = faCircleCheck;
  @Input() msg: string = '';
  @Input() msgValidated: string = '';
  @Input() errors: boolean | undefined = true;
  constructor() {}

  ngOnInit(): void {}

}
