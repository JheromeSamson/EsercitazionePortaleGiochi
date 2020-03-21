import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { User } from 'src/app/model/user';
import { EmitterVisitorContext } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  name: string;
  
  constructor(public router: Router) {   }

  registrazione(){
    console.log("nome: " + this.name);
    sessionStorage.setItem("name", this.name);

    if (sessionStorage.getItem != null){
      this.router.navigateByUrl('/portale/home');
    }
  }

  ngOnInit(): void {
  }
}
