import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { UserInfoFeedback } from '../../interfaces';
import { FeedbackSuccessPage } from '../feedback-success/feedback-success';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  @ViewChild(NgForm) feedbackForm: NgForm;

  userInfo: UserInfoFeedback = <UserInfoFeedback>{};

  formSubmitBtnTouched = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private menu: MenuController) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  sendFeedback() {
    this.formSubmitBtnTouched = true;

    if (this.feedbackForm.invalid) {
      let alert = this.alertCtrl.create({
        subTitle: 'Please fill all required field',
        buttons: ['OK']
      })

      alert.present();
      return;
    }

    this.navCtrl.setRoot(FeedbackSuccessPage);
  }

}
