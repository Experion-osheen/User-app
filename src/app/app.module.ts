import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundModule } from './core/components/not-found/not-found.module';
import { NotificationModule } from './core/components/notification/notification.module';
import { BroadcastService } from '@service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    HttpClientModule,
    NotificationModule
  ],
  providers: [
    BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
