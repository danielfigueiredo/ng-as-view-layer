import 'rxjs/add/operator/distinctUntilChanged';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { store } from './app.store';
import { Router } from '@angular/router';
import { locationPathSelector } from './store/app.selectors';
import { IAppState, createPingAction, createRouterAction, createFetchJsonAction } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
    ngRedux.provideStore(store);
    this.ngRedux.select(locationPathSelector)
      .subscribe((path: string) => this.router.navigateByUrl(path));
  }

  fireTestAction() {
    this.ngRedux.dispatch(createPingAction('PING'));
  }

  changeRoute() {
    this.ngRedux.dispatch(createRouterAction('HOME'));
  }

  getJSONMock() {
    this.ngRedux.dispatch(createFetchJsonAction());
  }

}
