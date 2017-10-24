import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';
import { User } from '../../app/models/User';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   
  user= {} as User;  
  
  constructor(private aFAuth: AngularFireAuth, private nav: NavController, private toast: ToastController) { } 
  
  async register(user: User) { 
     
    try { 
    const result =  await this.aFAuth.auth.createUserWithEmailAndPassword(user.email, user.password); 
    this.nav.setRoot(AboutPage);    
    console.log(result); 
  }  
    catch(e) { 
      this.toast.create({ 
        message: 'Error:', 
        duration: 3000 
       }).present(); 
      console.log(e);
      }
    } 
}
