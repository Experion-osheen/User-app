import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { BroadcastService, AppConfigurationService, WebStorageService } from '@service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  reqN = 0;
  count = 1;
  userData = [];
  messages: any;
  searchText = '';
  isAddModalShown = false;
  constructor(
    private userListService: UserListService,
    private broadcastService: BroadcastService,
    private appConfig: AppConfigurationService,
    private webStorageService: WebStorageService,
    private router: Router) { }

  ngOnInit() {
    this.messages = this.appConfig.messages;
    this.reqN = 0;
    this.count = 1;
    this.getUserList();
  }

  getUserList() {
    this.reqN = 20 * this.count;
    /*ReqN is updated in each scroll. Checked to get only maximum of 1000
     Ideally each API must be getting only 20 users,
     but reqn is only passed here as API description doesn't mention about pageCount ,startIndex or EndIndex
    */
    if (this.reqN > 1000) {
      return;
    }
    this.userListService
      .getUser(this.reqN)
      .subscribe(
        data => (this.userData = data),
        err => {
          this.broadcastService.broadcastAlert('error', this.messages.error);
        },
        () => {
          this.webStorageService.saveData('user-list', this.userData);
          this.count++;
        }
      );
  }

  addUser() {
    this.isAddModalShown = true;
  }

  onCloseAddModal() {
    this.isAddModalShown = false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
