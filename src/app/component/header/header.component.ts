import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  nomeUtenteLoggato: string;

  constructor(private userService: UserService) {  
  }
  ngOnInit(): void {
  }
    
  logout(){
    sessionStorage.clear();
    this.refresh();
  }

  getNomeUtenteLoggato(){
    this.nomeUtenteLoggato = this.user.getName();
    
  }
    
  refresh(): void {
    window.location.reload();
}

}
