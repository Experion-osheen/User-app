import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
  private keyPrefix: string;
  private localStorage: boolean;

  /** Constructor function */
  constructor(private appConfig: AppConfigurationService) {
    this.keyPrefix = appConfig.storageKeyPrefix;
    this.localStorage = appConfig.localStorage;
  }

  /** for saving the data to the web storage  */
  public saveData(key: string, data: object, sessionData?: boolean): any {
    const storageKey = this.keyPrefix + key;
    if (this.localStorage && !sessionData) {
      localStorage.setItem(storageKey, JSON.stringify(data));
    } else {
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    }
  }

  /** for getting the data from  the web storage  */
  public getData(key: string, sessionData?: boolean): object {
    const storageKey = this.keyPrefix + key;
    let storageData: string;
    if (this.localStorage && !sessionData) {
      storageData = localStorage.getItem(storageKey);
    } else {
      storageData = sessionStorage.getItem(storageKey);
    }
    if (storageData) {
      return JSON.parse(storageData);
    } else {
      return {};
    }
  }

  /** for removing the data from  the web storage  */
  public removeData(key: string, sessionData?: boolean): void {
    const storageKey = this.keyPrefix + key;
    if (this.localStorage && !sessionData) {
      localStorage.removeItem(storageKey);
    } else {
      sessionStorage.removeItem(storageKey);
    }
  }
}
