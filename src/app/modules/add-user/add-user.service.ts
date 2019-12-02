
import { Injectable } from '@angular/core';
import { ApiService } from '@service';

@Injectable({
  providedIn: 'root'
})
export class AddUSerService {
  public status: any;
  constructor(private apiService: ApiService) { }

  public changeStatus = dataToSend => {
    return this.apiService.post('bidding/changestatus', dataToSend);
  }
}
