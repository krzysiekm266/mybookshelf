import { slideInLeftAnimation } from 'src/app/animations/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],


})
export class AboutComponent implements OnInit {

  //constructor(private contexts: ChildrenOutletContexts) { }
  constructor() { }

  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }



  ngOnInit(): void {
  }

}
