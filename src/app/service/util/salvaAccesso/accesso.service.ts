import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../user/user.service';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AccessoService {

  userService: UserService;

  name: string;
  registrati = [];
  appoggio = [];


  constructor(private userServ: UserService) {
    this.userService = userServ;
  }

  salvaRegistrazione(user: User) {
    if (!this.checkStorage()) {
      localStorage.setItem('users', JSON.stringify(user));
      return true;
    } else if (localStorage.getItem('users')) {
    this.registrati = JSON.parse(localStorage.getItem('users'));
      // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.registrati.length; i++) {
        const attualeRegistrato = JSON.parse(this.registrati[i]);
        if (attualeRegistrato.password === user.getPassword && attualeRegistrato.email === user.getEmail) {
          return false;
        }
      }
    this.registrati.push(JSON.stringify(user));
    localStorage.setItem('users', JSON.stringify(this.registrati));
    // this.appoggio.push(JSON.stringify(user));
    // console.log(this.registrati);
    // console.log(this.appoggio);
    // localStorage.setItem('users', JSON.stringify(this.appoggio));
    sessionStorage.setItem('name', user.getName());
    return true;
    } else { return false; }
  }

  salvaLogin(email: string, password: string) {
    let accountEsistente = false;

    if (this.checkStorage()) {
      this.registrati = JSON.parse(localStorage.getItem('users'));
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.registrati.length; i++) {
        const attualeRegistrato = JSON.parse(this.registrati[i]);
        if (attualeRegistrato.password === password && attualeRegistrato.email === email) {
          sessionStorage.setItem('name', attualeRegistrato.name);
          this.userService.setUser(new User(attualeRegistrato.name, attualeRegistrato.email, attualeRegistrato.password));
          accountEsistente = true;
        }
      }
    }
    return accountEsistente;
  }

  checkStorage() {
    if (localStorage.getItem('users')) { return true;
    } else { return false; }
  }


}
