import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Product } from '../../interfaces';

import { AppProductService } from '../../shared/services/app-product.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Product[] = [];

  dataLoaded = false;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private appProductService: AppProductService) {

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      //duration: 3000
    });

    loader.present();
    
    this.appProductService.getProducts().then(products => { this.products = products; this.dataLoaded = true; loader.dismiss() });
  }

}
