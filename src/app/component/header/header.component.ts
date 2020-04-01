import {Component, OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/user';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  name;
  loggato = false;


  constructor() {
    this.getUtenteLoggato();
  }
  ngOnInit(): void {
    this.getUtenteLoggato();
  }

  logout() {
    sessionStorage.clear();
    this.user = null;
    this.loggato = false;
    this.refresh();
  }

  getUtenteLoggato() {
    if (sessionStorage.getItem('user') != null) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.name = this.user.name;
      this.loggato = true;
    }
  }

  refresh(): void {
    window.location.reload();
}

}
