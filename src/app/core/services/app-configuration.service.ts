import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {
  constructor() { }

  static regExp = {
    // tslint:disable-next-line:max-line-length
    email: /(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-])+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
  };


  /** Webstorage service */
  public storageKeyPrefix = 'PPSREVAMP_';

  public localStorage = true;

  public messages = {
    loginSuccess : 'Succesfully logged in',
    loginError : 'Please provide valid credentials',
    error : 'Something went wrong! Please try again later'
  };

}
