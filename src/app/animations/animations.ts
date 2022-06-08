import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  query,
  group,
  animateChild,
  state,
  stagger,
} from '@angular/animations';



export const slideInLeftAnimation = trigger('routeAnimations', [
  transition('*<=>*', [
    query(':enter', [
      style({
        position: 'absolute',
        width: '100%',
        left: '-100%',
      }),
      animate(
        '400ms ease-in',
        style({
          left: 0,
        })
      ),
    ],{optional:true}),
  ]),
]);

export const slideInRightAnimation = trigger('routeAnimations', [
  transition('*<=>*', [
    query(':enter', [
      style({
        position: 'absolute',
        width: '100%',
        right: '-100%',
      }),
      animate(
        '400ms ease-in',
        style({
          right: 0,
        })
      ),
    ],{optional:true}),
  ]),
]);
