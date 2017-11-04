import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth' 
import { AboutPage } from '../about/about';
import { User } from '../../app/models/User';
/**
 * Claire Gizard - 1106363
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  
    constructor(private afAuth: AngularFireAuth, private nav: NavController, public navParams: NavParams) {
     }
   
    public createAccount() {
      this.nav.push('RegisterPage');
    }
   
    async login(user: User) {
        
    /**
     * Call to the database for the connection
     * of an account
     * send the email and the password
     */
      try {
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        console.log(result);
        if (result) {
          this.nav.setRoot(AboutPage);        
        }
      } catch (e) {
      /**
       * catch the errors if the database call
       * fail
       */
        console.log(e);
      }
    }
}
