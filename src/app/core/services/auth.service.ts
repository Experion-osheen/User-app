import { Injectable } from '@angular/core';
import { WebStorageService } from './web-storage.service';

@Injectable()
export class AuthService {

  constructor(private webStorageService: WebStorageService) {
  }

  public isAuthenticated() {
    let IsLoggedIn: any;
    IsLoggedIn = this.webStorageService.getData('IsLoggedIn');
    const response = IsLoggedIn ? IsLoggedIn.isLoggedIn : false;
    return response;
  }

  public onLogin() {
    this.webStorageService.saveData('IsLoggedIn', { isLoggedIn: true });
  }

}
