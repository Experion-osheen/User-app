import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptors/http.header.interceptor';
import { HttpErrorInterceptor } from './interceptors/http.error.interceptor';
import { ApiService,  ErrorsHandler, WebStorageService, AppConfigurationService } from './services';

import { NotFoundModule, NetworkDetectionModule } from './components';

@NgModule({
  imports: [CommonModule, NetworkDetectionModule, NotFoundModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    ApiService,
    AppConfigurationService,
    WebStorageService
  ],
  exports: [NetworkDetectionModule, NotFoundModule]
})
export class CoreModule { }
