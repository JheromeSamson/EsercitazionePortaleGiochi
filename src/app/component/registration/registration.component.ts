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
  password: string;*/
  user: User;
  accesso = false;

  myForm: FormGroup;

  constructor(private router: Router,
              private accessoService: AccessoService,
              private formBuilder: FormBuilder) {   }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      birthday: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      residenza: this.formBuilder.group({
        denominazioneGenerale: '',
        denominazioneUfficiale: '',
        numeroCivico: ''}, [Validators.required]),
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.myForm.valueChanges.subscribe(console.log);
  }


  registrazione() {

    this.accesso = this.accessoService.salvaRegistrazione(
      new User( this.myForm.get('name').value, this.myForm.get('lastname').value, this.myForm.get('birthday').value,
                this.myForm.get('sex').value, this.myForm.get('residenza').value, this.myForm.get('username').value,
                this.myForm.get('email').value, this.myForm.get('password').value));

    if (this.accesso) {
      this.router.navigateByUrl('/portale/home');
    } else {
      console.log('GIA REGISTRATO');
    }
  }

  // GETTERS & SETTERS

  get name() {
    return this.myForm.get('name');
  }
  get lastname() {
    return this.myForm.get('lastname');
  }
  get birthday() {
    return this.myForm.get('birthday');
  }
  get sex() {
    return this.myForm.get('sex');
  }
  get residenza() {
    return this.myForm.get('residenza');
  }
  get denominazioneGenerale() {
    return this.myForm.get('denominazioneGenerale');
  }
  get denominazioneUfficiale() {
    return this.myForm.get('denominazioneUfficiale');
  }
  get numeroCivico() {
    return this.myForm.get('numeroCivico');
  }
  get username() {
    return this.myForm.get('username');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
}
