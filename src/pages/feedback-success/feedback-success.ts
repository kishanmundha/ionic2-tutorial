import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-feedback-success',
  templateUrl: 'feedback-success.html'
})
export class FeedbackSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackSuccessPage');
  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
