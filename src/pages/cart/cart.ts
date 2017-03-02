import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppProductService } from '../../shared/services/app-product.service';

import { CheckoutPage } from '../checkout/checkout';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  cartItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private appProductService: AppProductService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    this.appProductService.cartItems$.subscribe(items => this.cartItems = items);
  }

  removeProductFromCart(id: number) {
    this.appProductService.removeProductFromCart(id);
  }

  openCheckout() {
    this.navCtrl.push(CheckoutPage);
  }
}
