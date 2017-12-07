import 'rxjs/add/operator/distinctUntilChanged';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { pushToPosts } from './router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  changeRoute() {
    this.ngRedux.dispatch(pushToPosts());
  }

}
