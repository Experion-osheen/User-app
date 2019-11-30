import { Component, OnInit } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { BroadcastService } from '@service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  public toasterconfig: ToasterConfig = new ToasterConfig({
    // tapToDismiss: true,
    timeout: 5000,
    showCloseButton: true
  });

  constructor(
    private toasterService: ToasterService,
    private broadcastService: BroadcastService
  ) {
    this.broadcastService.alertSource.subscribe(data => {
      switch (data.alertType) {
        case 'success':
          this._showSuccess(data.alertData);
          break;
        case 'error':
          this._showError(data.alertData);
          break;
        case 'warning':
          this._showWarning(data.alertData);
          break;
        case 'info':
          this._showInfo(data.alertData);
          break;
        case 'primary':
          this._showPrimary(data.alertData);
          break;
        default:
          break;
      }
    });
  }

  /** For showing the success message */
  private _showSuccess(message: string) {
    this.toasterService.pop('success', 'Success ', message);
  }
  /** For showing the Error message */
  private _showError(message: string) {
    this.toasterService.pop('error', 'Error', message);
  }
  /** For showing the Warning message */
  private _showWarning(message: string) {
    this.toasterService.pop('warning', 'Warning', message);
  }
  /** For showing the Info message */
  private _showInfo(message: string) {
    this.toasterService.pop('info', 'Info ', message);
  }
  /** For showing the primary message */
  private _showPrimary(message: string) {
    this.toasterService.pop('primary', 'Info ', message);
  }
}
