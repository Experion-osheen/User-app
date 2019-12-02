import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:
      './modules/login/login.module#LoginModule'
  },
  {
    path: 'list',
    loadChildren:
      './modules/user-list/user-list.module#UserListModule'
  },
  {
    path: '',
    loadChildren:
      './modules/login/login.module#LoginModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
