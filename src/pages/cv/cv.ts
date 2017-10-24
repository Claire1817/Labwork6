import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Claire Gizard - 1106363
 */
@IonicPage()
@Component({
  selector: 'page-cv',
  templateUrl: 'cv.html',
})
export class CvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvPage');
  }

}
