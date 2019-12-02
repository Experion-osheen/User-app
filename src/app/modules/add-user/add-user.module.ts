import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from 'ngx-bootstrap';

export const routes = [
  { path: '', component: AddUserComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BsDatepickerModule.forRoot(),
  ],
  exports: [AddUserComponent],
})
export class AddUserModule { }
