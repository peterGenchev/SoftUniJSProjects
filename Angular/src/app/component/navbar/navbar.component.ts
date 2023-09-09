import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  isLoggedIn = false;
  private authSubscription: Subscription;

  constructor(private auth: AngularFireAuth) {
    this.authSubscription = this.auth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  ngOnDestroy(): void {
    
    this.authSubscription.unsubscribe();
  }

  logout() {
    this.auth.signOut()
      .then(() => {
        console.log('you logged out successfully'); 
      })
      .catch((error) => {
        console.error('something went wrong:', error);
       
      });
  }
}
