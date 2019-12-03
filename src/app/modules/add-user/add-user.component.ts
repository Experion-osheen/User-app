import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BroadcastService, AppConfigurationService, WebStorageService, ValidationService } from '@service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit, OnChanges {
  modalRef: BsModalRef;
  show = true;
  config = {
    animated: true,
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: true
  };

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
    private modalService: BsModalService,
    private webStorageService: WebStorageService
  ) { }

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
      email: ['', [Validators.required, ValidationService.emailValidator]],
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  showHide() {
    this.show = !this.show;
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

    // Adding static images and location
    response.picture = {
      large: 'https://randomuser.me/api/portraits/men/90.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/90.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/90.jpg'
    };
    response.location = {
      street: '8387 mill lane',
      city: 'st albans',
      state: 'oxfordshire',
      zip: 'L6I 1PQ'
    };
    response.cell = response.phone;

    const userObject = {
      user: response
    };

    let userList: any;
    userList = this.webStorageService.getData('user-list');
    if (userList) {
      if (userList.results) {
        userList.results.push(userObject);
      } else {
        userList.results = [userObject];
      }
    } else {
      userList = {
        results: [userObject]
      };
    }
    this.webStorageService.saveData('user-list', userList);
    this.isSubmitted = false;
    this.hideModal();
    this.broadcastService.broadcastAlert('success', this.errorMessage.addSuccess);
    // Search functionality can be used for added user.
    // On scroll the localstorage is reloaded and added user may be gone.
    // Search can be done with api, not done for now as api doc is not detailed.
  }

  hideModal() {
    this.modalRef.hide();
    this.addForm.reset();
    this.addForm.patchValue({
      title: 'Mr.'
    });
    this.isModalShown = false;
    this.onCloseModal.next('');
  }

}
