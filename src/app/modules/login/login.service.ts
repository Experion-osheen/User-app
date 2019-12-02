import { Injectable } from '@angular/core';
import { ApiService } from '@service';
import * as data from './data.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public status: any;
  constructor(private apiService: ApiService) {
  }

  public login = (dataToSend) => {
    if (dataToSend.username === data.username && dataToSend.password === data.password) {
      return true;
    }
    return false;
  }
}
