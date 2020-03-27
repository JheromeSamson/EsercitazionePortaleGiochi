import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;

  constructor() { }

  getUser(){
    return this.user;
  }

  deleteUser(){
    this.user = null;
  }

  setUser(user: User){
    this.user = user;
  }
}
