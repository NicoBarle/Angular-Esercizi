import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "./users";
import { Utenti } from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  utenti = Utenti;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['', Validators.required], 'cognome': ['', Validators.required], 'username': ['', Validators.required], 'password': ['', Validators.required], 'email': ['', Validators.compose([Validators.required, Validators.email])], 'telefono': ['', Validators.required]
    });
  }

    onSubmit(): boolean {

      let utente : User = new User();
      utente.nome = this.myForm.controls['nome'].value;
      utente.cognome = this.myForm.controls['cognome'].value;
      utente.username = this.myForm.controls['username'].value;
      utente.password = this.myForm.controls['password'].value;
      utente.email = this.myForm.controls['email'].value;
      utente.telefono = Number(this.myForm.controls['telefono'].value);

      this.utenti.push(utente);

      console.log('ciao');

    return false;
  }

}