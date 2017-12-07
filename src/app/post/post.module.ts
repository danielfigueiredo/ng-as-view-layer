import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import {
  injectEpic,
  injectReducer,
  store,
} from 'app/store';
import {
  postReducer,
  postEpic,
} from './store';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostComponent }])
  ],
  declarations: [
    PostComponent,
  ],
})
export class PostModule {

  constructor() {
    console.log('COMPONENT BOOTSTRAPPING');
    injectReducer(store, { key: 'post', reducer: postReducer });
    injectEpic(postEpic);
  }

}
