import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BroadcastService, AppConfigurationService, WebStorageService } from '@service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnChanges {

  @ViewChild('addModalButton', { static: false }) addModalButton: ElementRef;
  @ViewChild('closeModalButton', { static: false }) closeModalButton: ElementRef;

  @Input() isModalShown: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCloseModal = new EventEmitter();

  addForm: FormGroup;
  isSubmitted = false;
  public errorMessage: any;
  phoneMask: any;
  titles: any;
  toDate: any;
  constructor(
    private formBuilder: FormBuilder,
    private appConfigurationService: AppConfigurationService,
    private broadcastService: BroadcastService,
    private webStorageService: WebStorageService) { }

  ngOnInit() {
    this.errorMessage = this.appConfigurationService.messages;
    this.phoneMask = this.appConfigurationService.phoneMask;
    this.titles = this.appConfigurationService.titles;
    this.toDate = new Date();
    this.addForm = this.formBuilder.group({
      title: ['Mr.', [Validators.required]],
      gender: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    if (changes.hasOwnProperty('isModalShown')) {
      if (changes.isModalShown.currentValue) {
        this.isSubmitted = false;
        this.addModalButton.nativeElement.click();
      }
    }
  }

  addUser() {
    this.isSubmitted = true;
    if (this.addForm.invalid) {
      return;
    }
    const response = this.addForm.value;
    response.name = {
      title: response.title,
      first: response.firstName,
      last: response.lastName,
    };
    let userList: any;
    userList = this.webStorageService.getData('user-list');
    if (userList) {
      if (userList.results) {
        userList.results.push(response);
      } else {
        userList.results = [response];
      }
    } else {
      userList = {
        results: [response]
      };
    }
    this.webStorageService.saveData('user-list', userList);
    this.isSubmitted = false;
    this.hideModal();
    this.broadcastService.broadcastAlert('success', this.errorMessage.addSuccess);
  }

  hideModal() {
    this.addForm.reset();
    this.addForm.patchValue({
      title: 'Mr.'
    });
    this.isModalShown = false;
    this.onCloseModal.next('');
  }

}
