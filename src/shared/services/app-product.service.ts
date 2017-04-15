import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';

import { Product } from '../../interfaces';

@Injectable()
export class AppProductService {

  private cartItems = [];
  private cartItemCount = 0;
  public cartItemCount$ = new BehaviorSubject<number>(0);
  public cartItems$ = new BehaviorSubject<any[]>([]);

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http
      .get('app/products')
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  addProductToCart(productId: number, productName: string) {

    let cartItem = this.cartItems.find(item => item.id === productId);

    if (!cartItem) {
      cartItem = { id: productId, name: productName, qty: 1 };
      this.cartItems.push(cartItem);
    } else {
      cartItem.qty++;
    }

    this.cartItemCount++;
    this.cartItemCount$.next(this.cartItemCount);
    this.cartItems$.next(this.cartItems);
  }

  removeProductFromCart(productId: number) {
    const cartItem = this.cartItems.find(item => item.id === productId);

    if (cartItem) {
      if (cartItem.qty > 0) {
        this.cartItemCount -= cartItem.qty;
      }

      const itemIndex = this.cartItems.findIndex(item => item.id === productId);

      this.cartItems.splice(itemIndex, 1);
    }

    this.cartItemCount$.next(this.cartItemCount);
    this.cartItems$.next(this.cartItems);
  }

  clearCart() {
    this.cartItems.length = 0;
    this.cartItemCount = 0;

    this.cartItemCount$.next(this.cartItemCount);
    this.cartItems$.next(this.cartItems);
  }
}