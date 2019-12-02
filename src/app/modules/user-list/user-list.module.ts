import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
export const routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [UserListComponent]
})
export class UserListModule {}
