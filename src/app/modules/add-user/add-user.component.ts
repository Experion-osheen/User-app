import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidationService, AppConfigurationService, WebStorageService } from '@service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  constructor(
    private formBuilder: FormBuilder,
    private appConfigurationService: AppConfigurationService,
    private webStorageService: WebStorageService) { }

  ngOnInit() {
    this.errorMessage = this.appConfigurationService.messages;
    this.phoneMask = this.appConfigurationService.phoneMask;
    this.addForm = this.formBuilder.group({
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
    console.log('in add user');
    this.isSubmitted = true;
    if (this.addForm.invalid) {
      return;
    }
    let userList: any;
    userList = this.webStorageService.getData('user-list');

    console.log(this.addForm.value);

    userList.push(this.addForm.value);
    this.webStorageService.saveData('user-list', userList);
    console.log(this.addForm.value);
    this.isSubmitted = false;
    this.hideModal();
  }

  hideModal() {
    this.addForm.reset();
    this.isModalShown = false;
    this.onCloseModal.next('');
  }

}
