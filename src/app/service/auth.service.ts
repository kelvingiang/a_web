import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin: boolean = true;
  constructor() {}

  isAuthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => resolve(this.isLogin), 800);
    });
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }
}
