import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CheckoutSuccessPage } from '../checkout-success/checkout-success';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  openCheckoutSuccess() {
    this.navCtrl.setRoot(CheckoutSuccessPage);
  }

}
