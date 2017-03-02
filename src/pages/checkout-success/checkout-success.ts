import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-checkout-success',
  templateUrl: 'checkout-success.html'
})
export class CheckoutSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutSuccessPage');
  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
