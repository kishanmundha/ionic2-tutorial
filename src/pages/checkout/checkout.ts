import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { UserInfoCheckout } from '../../interfaces';

import { CheckoutSuccessPage } from '../checkout-success/checkout-success';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  @ViewChild(NgForm) checkoutForm: NgForm;

  userInfo: UserInfoCheckout = <UserInfoCheckout>{};

  formSubmitBtnTouched = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private menu: MenuController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {

    this.formSubmitBtnTouched = true;

    if (this.checkoutForm.invalid) {
      let alert = this.alertCtrl.create({
        subTitle: 'Please fill all required field',
        buttons: ['OK']
      })

      alert.present();
      return;
    }

    this.navCtrl.setRoot(CheckoutSuccessPage);
  }

}