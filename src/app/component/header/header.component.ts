import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  nomeUtenteLoggato: string;

  constructor() {  }
  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear();
    this.refresh();
  }

  getNomeUtenteLoggato() {
    this.nomeUtenteLoggato = this.user.getName();

  }

  refresh(): void {
    window.location.reload();
}

}
