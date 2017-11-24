import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, store } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }

  fireTestAction() {
    this.ngRedux.dispatch({ type: 'SET_TEST_1', payload: 'PING' });
  }

}
