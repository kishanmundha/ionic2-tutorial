import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-checkout-success',
  templateUrl: 'checkout-success.html'
})
export class CheckoutSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutSuccessPage');
  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
