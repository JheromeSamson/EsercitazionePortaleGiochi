import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoService {

 userService:UserService;

 name:string;
 user:User;
 registrati:User[];
 appoggio;

  constructor(private userServ: UserService) {
    this.userService = userServ;
   }

  salvaRegistrazione(user: User){

    if (!localStorage.getItem("users")){
      localStorage.setItem("users", JSON.stringify(user));
    }else if(localStorage.getItem("users")){
      this.registrati =  JSON.parse(localStorage.getItem("users"));
      this.appoggio = JSON.stringify(user)
      //this.registrati.push(this.appoggio);
      console.log(this.registrati);
      //localStorage.setItem("users", JSON.stringify(this.registrati));
    }
    
    return true;
    


/*
    if(this.registrati("name") != user.getName() || localStorage.getItem("email") != user.getEmail() || localStorage.getItem("password") != user.getPassword())
    {
      this.userService.setUser(user);

      localStorage.setItem("name", user.getName());
      localStorage.setItem("email", user.getEmail());
      localStorage.setItem("password", user.getPassword());
      this.name = localStorage.getItem("name");

      sessionStorage.setItem("name", this.name);
      return true;
    }else{ 
      return false;}*/
  }

  salvaLogin(email: string, password: string){
    
    if( localStorage.getItem("email") === email && localStorage.getItem("password") === password){

      this.name = localStorage.getItem("name");
      sessionStorage.setItem("name", this.name);

      this.user = new User(localStorage.getItem("name"), localStorage.getItem("email"), localStorage.getItem("password"))

      this.userService.setUser(this.user);
      return true;
    }else{ 
      return false;}
  }
}
