import { Component } from '@angular/core';

import { NavController, LoadingController, MenuController } from 'ionic-angular';

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

  isSearching = false;
  search = '';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private appProductService: AppProductService, private menu: MenuController) {

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();
    
    this.appProductService.getProducts().then(products => { this.products = products; this.dataLoaded = true; loader.dismiss() });

    this.appProductService.cartItemCount$.subscribe(count => this.cartItemCount = count);
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(true);
  }

  openCart() {
    this.isSearching = false;
    this.search = '';
    this.navCtrl.push(CartPage);
  }

}
