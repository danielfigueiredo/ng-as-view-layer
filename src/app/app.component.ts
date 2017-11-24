import 'rxjs/add/operator/distinctUntilChanged';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, store } from './app.reducer';
import { Router } from '@angular/router';
import { locationPathSelector } from './app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
    ngRedux.provideStore(store);
    this.ngRedux
      .select(locationPathSelector)
      .distinctUntilChanged()
      .subscribe((path: string) => this.router.navigateByUrl(path));
  }

  fireTestAction() {
    this.ngRedux.dispatch({ type: 'SET_TEST_1', payload: 'PING' });
  }

  changeRoute() {
    this.ngRedux.dispatch({ type: 'HOME' });
  }

  getJSONMock() {
    this.ngRedux.dispatch({ type: 'GET_JSON_MOCK' });
  }

}
