import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Product } from '../../interfaces';

import { AppProductService } from '../../shared/services/app-product.service';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Product[] = [];

  cartItemCount: number;

  dataLoaded = false;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private appProductService: AppProductService) {

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      //duration: 3000
    });

    loader.present();
    
    this.appProductService.getProducts().then(products => { this.products = products; this.dataLoaded = true; loader.dismiss() });

    this.appProductService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }

}
