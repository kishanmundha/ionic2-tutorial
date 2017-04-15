import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { UserInfoCheckout } from '../../interfaces';

import { AppProductService } from '../../shared/services/app-product.service';

import { CheckoutSuccessPage } from '../checkout-success/checkout-success';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  @ViewChild(NgForm) checkoutForm: NgForm;

  userInfo: UserInfoCheckout = <UserInfoCheckout>{};

  formSubmitBtnTouched = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private menu: MenuController,
    private appProductService: AppProductService,
    public loadingCtrl: LoadingController
  ) {}

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

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();
    
    setTimeout(() => {
      loader.dismiss();
      this.appProductService.clearCart();
      this.navCtrl.setRoot(CheckoutSuccessPage);
    }, 2000);
  }

}