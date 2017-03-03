import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserInfoCheckout } from '../../interfaces';

import { CheckoutSuccessPage } from '../checkout-success/checkout-success';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  userInfo: UserInfoCheckout = <UserInfoCheckout>{};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {
    this.navCtrl.setRoot(CheckoutSuccessPage);
  }

}
