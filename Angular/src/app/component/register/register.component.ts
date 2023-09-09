import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  repeatPassword = '';

  constructor(private auth: AngularFireAuth, private router: Router) { } 

  register() {

    if(this.password !== this.repeatPassword){
      window.alert('Passwords do not match. Please try again.');
      return;
    }
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
  
        .then((userCredential: any) => {
          console.log(userCredential);
          this.router.navigate(['/login']);
        })
        .catch((error: any) => {
          console.error(error);
        });

        
    
  }
}
