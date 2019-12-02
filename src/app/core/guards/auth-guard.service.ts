import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services';

@Injectable()
export class UserLoadPermission implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}

@Injectable()
export class NoUserLoadPermission implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['list']);
      return false;
    }

    return true;
  }
}
