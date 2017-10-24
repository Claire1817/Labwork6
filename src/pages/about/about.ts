import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 /**
 * Claire Gizard - 1106363
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
