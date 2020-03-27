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
  user: User;
  registrati = [];
  appoggio = [];

  index: number;

  constructor(private userServ: UserService) {
    this.userService = userServ;
  }

  salvaRegistrazione(user: User) {

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(user));
      return true;
    }
    else if (localStorage.getItem("users")) {
    this.registrati = JSON.parse(localStorage.getItem("users"));
      for(let i =0; i< this.registrati.length; i++){
        let attualeRegistrato = JSON.parse(this.registrati[i]);
        if(attualeRegistrato.password == user.getPassword && attualeRegistrato.email == user.getEmail){
          return false;
        }
      }
      this.appoggio.push(JSON.stringify(user));
      localStorage.setItem("users", JSON.stringify(this.appoggio));
      sessionStorage.setItem("name", user.getName());
      return true;
    }
    else return false;
  }

  salvaLogin(email: string, password: string) {

    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {

      this.name = localStorage.getItem("name");
      sessionStorage.setItem("name", this.name);

      this.user = new User(localStorage.getItem("name"), localStorage.getItem("email"), localStorage.getItem("password"))

      this.userService.setUser(this.user);
      return true;
    } else {
      return false;
    }
  }
}
