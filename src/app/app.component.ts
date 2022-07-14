import { RouterOutlet } from '@angular/router';
import { slideInBottomAnimation } from 'src/app/animations/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInBottomAnimation]

})
export class AppComponent  {
  constructor() { }

  prepareRoute(outlet:RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  title:string = 'mybookshelf';
}
