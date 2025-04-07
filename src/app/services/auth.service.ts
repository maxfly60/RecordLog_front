import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = {};
  isAuthenticated: boolean = false;

  constructor(private oidcService: OidcSecurityService) {
    this.oidcService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      this.isAuthenticated = isAuthenticated;
      this.userData = userData;
    });
  }

  login() {
    if (!this.isAuthenticated) {
      this.oidcService.authorize();
    }
  }

  logout() {
    this.oidcService.logoff().subscribe();
  }

  getUserName(): string {
    return this.userData?.preferred_username || '';
  }


  /*
  login() {
    this.oidcService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      console.log(isAuthenticated);
      console.log(userData);
      if (!isAuthenticated) this.oidcService.authorize();
      this.userData = userData;
    });
  }

  checkIsAuthenticated(): boolean {
    this.oidcService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      this.userData = userData;
      console.log(isAuthenticated);
      console.log(userData);
      return isAuthenticated;
    });
    return false;
  }

  logout() {
    this.oidcService.logoff().subscribe();
  }
	*/
}
