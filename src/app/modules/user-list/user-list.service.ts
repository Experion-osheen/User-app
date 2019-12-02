import { Injectable } from '@angular/core';
import { ApiService } from '@service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  public status: any;
  constructor(private apiService: ApiService) { }

  public getUser = (reqN) => {
    return this.apiService.get('?results=' + reqN);
  }
}
