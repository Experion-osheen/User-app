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
  public storageKeyPrefix = 'USERAPP_';
  public localStorage = true;
  public phoneMask1 = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public titles = [
    'Mr.',
    'Mrs.',
    'Mx.',
    'Ms.',
    'Miss.',
    'Master.',
    'Maid.',
    'Madam .'
  ];
  public messages = {
    loginSuccess: 'Succesfully logged in',
    loginError: 'Please provide valid credentials',
    error: 'Something went wrong! Please try again later',
    commonErrorMessage: 'This field is required',
    addSuccess : 'User added successfully'
  };

}
