import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import {
  NoUserLoadPermission,
  UserLoadPermission
} from './core/guards/auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoUserLoadPermission],
    loadChildren:
      './modules/login/login.module#LoginModule'
  },
  {
    path: 'list',
    canActivate: [UserLoadPermission],
    loadChildren:
      './modules/user-list/user-list.module#UserListModule'
  },
  {
    path: '',
    canActivate: [NoUserLoadPermission],
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
