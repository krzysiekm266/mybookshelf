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
<<<<<<< HEAD
=======

>>>>>>> 121d37ab8debd436f8967a9c8d28c785f55787ee
  @Input() errors: boolean | undefined = true;
  constructor() {}

  ngOnInit(): void {}

}
