import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class BroadcastService {

  private alertText = new Subject<any>();
  alertSource = this.alertText.asObservable();


  broadcastAlert(alertType: any, alertData: any) {
    this.alertText.next({ alertType, alertData });
  }

}
