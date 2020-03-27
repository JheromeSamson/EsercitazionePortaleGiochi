import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item-interface';
import { HomeComponent } from '../home/home.component';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userLoggato: User;
  nameUser: string;

  items: MenuItem[] = [
    {id:1, description:"HOME", url:"portale/home"},
    {id:2, description:"GAME LIST", url:"portale/game-list"},
    {id:3, description:"MODIFICA ", url:"portale/game-edit"},
  ];

  constructor(private userService: UserService){
    this.userLoggato = userService.getUser();
    console.log("sono fuori dalla condizione"+this.userLoggato);
    if(this.userLoggato != null){
      this.nameUser = this.userLoggato.getName();
      console.log("sono dentro dalla condizione"+this.nameUser);
    }
  }
  
  ngOnInit(): void {
  }

  
}
