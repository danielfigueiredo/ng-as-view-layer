import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgReduxModule,
  NgRedux,
} from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { store, IAppState } from './store';
import { locationPathSelector } from './router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgReduxRouterModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {


  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
    ngRedux.provideStore(store);
    this.ngRedux.select(locationPathSelector)
      .subscribe((path: string) => {
        console.log('ROUTER ACTION HAPPENED', path);
        this.router.navigateByUrl(path);
      });
  }

}
