import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { RouterModule } from '@angular/router';
export const routes = [
  { path: '', component: AddUserComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [AddUserComponent]
})
export class AddUserModule {}
