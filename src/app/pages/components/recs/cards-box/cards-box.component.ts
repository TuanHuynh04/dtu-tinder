import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  keyframes,
  animate,
  transition,
  style,
} from '@angular/animations';
import * as kf from '../reaction-box/keyframes';
import { User } from './../cards-box/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cards-box',
  templateUrl: './cards-box.component.html',
  styleUrls: ['./cards-box.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swipeRight', animate(750, keyframes(kf.swipeRight))),
      transition('* => swipeLeft', animate(750, keyframes(kf.swipeLeft))),
    ]),
  ],
})
export class CardsBoxComponent implements OnInit {
  @Input() users: any;

  public index = 0;

  @Input()
  parentSubject: Subject<any>;

  animationState: string;

  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.parentSubject.subscribe((event) => {
      this.startAnimation(event);
    });
  }

  // tslint:disable-next-line: typedef
  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
