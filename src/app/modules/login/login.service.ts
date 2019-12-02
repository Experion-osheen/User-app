import { Injectable } from '@angular/core';
import { ApiService } from '@service';
import * as data from './data.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public status: any;
  constructor(private apiService: ApiService) {
    console.log(data, 'Data');
  }

  public changeStatus = dataToSend => {
    return this.apiService.post('bidding/changestatus', dataToSend);
  }
}
