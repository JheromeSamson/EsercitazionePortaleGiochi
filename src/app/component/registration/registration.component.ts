import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { User } from 'src/app/model/user';
import { EmitterVisitorContext } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AccessoService } from 'src/app/service/util/salvaAccesso/accesso.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  user:User;

  name: string;
  email: string;
  password: string;

  accesso: boolean = false;
  
  constructor(private router: Router, private accessoService: AccessoService) {   }

  registrazione(){
    this.user = new User(this.name,this.email,this.password);
    this.accesso = this.accessoService.salvaRegistrazione(this.user);

    if (this.accesso){
      this.router.navigateByUrl('/portale/home');
    }else {
      console.log("GIA REGISTRATO");
    }
  }

  ngOnInit(): void {
  }
}
