import { Component, Input, OnInit } from '@angular/core';
import { faLaravel, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faLaravel = faLaravel;
  faAngular = faAngular;
  @Input() menu: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
