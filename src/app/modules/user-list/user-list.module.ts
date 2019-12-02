import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserModule } from './../add-user/add-user.module';
export const routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    AddUserModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
