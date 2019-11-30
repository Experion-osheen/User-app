import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToasterModule.forRoot()
  ],
  exports: [NotificationComponent],
  providers: []
})
export class NotificationModule {}
