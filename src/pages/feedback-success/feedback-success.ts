import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-feedback-success',
  templateUrl: 'feedback-success.html'
})
export class FeedbackSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackSuccessPage');
  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
