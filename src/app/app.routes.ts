import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'posts',
    loadChildren: './post/post.module#PostModule',
  },
];
