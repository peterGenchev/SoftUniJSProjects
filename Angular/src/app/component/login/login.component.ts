import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AngularFireAuth, private router: Router) { }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential: any) => {
        this.router.navigate(['/']);
        console.log('Welcome!', userCredential);
      })
      .catch((error: any) => {
        console.error('Something went wrong:', error);
      });
  }
}