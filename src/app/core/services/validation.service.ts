import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
// import { DATE } from 'ngx-bootstrap/chronos/units/constants';

@Injectable()
export class ValidationService {

    constructor() { }

    /** Email Validator */
    // tslint:disable-next-line:member-ordering
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value) {
            if (control.value.toLowerCase().match(AppConfigurationService.regExp.email)) {
                return null;
            } else {
                return { invalidEmailAddress: true };
            }
        }
    }
}
