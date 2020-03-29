import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AccessoService } from 'src/app/service/util/salvaAccesso/accesso.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

/*  name: string;
  email: string;
  password: string;
  accesso = false;
*/
  myForm: FormGroup;

  constructor(private router: Router,
              private accessoService: AccessoService,
              private formBuilder: FormBuilder) {   }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

/*
  registrazione() {
    this.accesso = this.accessoService.salvaRegistrazione(new User(this.name, this.email, this.password));

    if (this.accesso) {
      this.router.navigateByUrl('/portale/home');
    } else {
      console.log('GIA REGISTRATO');
    }
  }
*/
  // GETTERS & SETTERS

  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
}
