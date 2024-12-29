import { MenuController } from '@ionic/angular';
import { Injectable, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  zone = inject(NgZone);

  constructor(private router: Router, private menuCtrl: MenuController) {}

  signOut(): void {
    sessionStorage.clear();
    this.zone.run(() => {
      window.location.reload();
      this.menuCtrl.enable(false, 'sideMenu');
      this.router.navigateByUrl('auth');
    });
  }

  public removeToken() {
    sessionStorage.removeItem(TOKEN_KEY);
  }

  public saveToken(token): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    sessionStorage.removeItem(REFRESHTOKEN_KEY);
    sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
