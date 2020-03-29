import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessoService } from 'src/app/service/util/salvaAccesso/accesso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  accesso: boolean;

  constructor(private router: Router, private accessoService: AccessoService) { }

  ngOnInit(): void {
  }

  accedi() {

    this.accesso = this.accessoService.salvaLogin(this.email, this.password);

    if (this.accesso) {
      this.refresh();
      this.router.navigateByUrl('portale/home');
    } else {
      console.log('Non Sei Loggato!!!');
    }

  }

 refresh(): void {
    window.location.reload();
}

}
