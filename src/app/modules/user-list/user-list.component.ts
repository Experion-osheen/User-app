import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { BroadcastService, AppConfigurationService, WebStorageService } from '@service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  reqN = 20;
  userData = [];
  messages: any;
  constructor(
    private userListService: UserListService,
    private broadcastService: BroadcastService,
    private appConfig: AppConfigurationService,
    private webStorageService: WebStorageService) { }

  ngOnInit() {
    this.messages = this.appConfig.messages;
    this.getUserList();
  }

  getUserList() {
    this.userListService
      .getUser(this.reqN)
      .subscribe(
        data => (this.userData = data.results),
        err => {
          this.broadcastService.broadcastAlert('error', this.messages.error);
        },
        () => {
          this.webStorageService.saveData('user-list', this.userData);
        }
      );
  }

}
