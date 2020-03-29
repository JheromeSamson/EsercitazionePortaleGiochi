import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import {UserService} from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoService {


  user: User;
  name: string;
  registrati = [];
  appoggio = [];


  constructor(private userLoggato: UserService) {
  }

  salvaRegistrazione(user: User) {
    if (!this.checkStorage()) {
      localStorage.setItem('users', JSON.stringify(user));
      sessionStorage.setItem('user', JSON.stringify(user));
      this.salvaUserLoggato(user);
      return true;
    } else if (localStorage.getItem('users')) {
    this.registrati = JSON.parse(localStorage.getItem('users'));
      // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.registrati.length; i++) {
        const attualeRegistrato = JSON.parse(this.registrati[i]);

        if (attualeRegistrato.password === user.getPassword() && attualeRegistrato.email === user.getEmail()) {
          return false;
        }
      }
    // this.registrati.push(JSON.stringify(user));
    // localStorage.setItem('users', JSON.stringify(this.registrati));
    this.appoggio.push(JSON.stringify(user));
    localStorage.setItem('users', JSON.stringify(this.appoggio));
    sessionStorage.setItem('user', JSON.stringify(user));
    this.salvaUserLoggato(user);
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
          sessionStorage.setItem('user', JSON.stringify(attualeRegistrato));
          this.salvaUserLoggato(new User(attualeRegistrato.name, attualeRegistrato.lastname , attualeRegistrato.birthday,
                                            attualeRegistrato.sex, attualeRegistrato.residence, attualeRegistrato.username,
                                            attualeRegistrato.email, attualeRegistrato.password));
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

  salvaUserLoggato(user: User) {
    this.userLoggato.setUser(user);
  }


}
