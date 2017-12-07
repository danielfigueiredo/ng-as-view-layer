import {
  Component,
  OnInit,
} from '@angular/core';
import {
  NgRedux,
  select,
} from '@angular-redux/store';
import { IAppState } from 'app/store';
import { fetchPostsRequested, postsSelector } from './store';

@Component({
  selector: 'app-home',
  template: `<div>POSTS RETRIEVED: {{ posts$ | async | json }}</div>`
})
export class PostComponent implements OnInit {

  @select(postsSelector) posts$;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.ngRedux.dispatch(fetchPostsRequested());
  }

}
