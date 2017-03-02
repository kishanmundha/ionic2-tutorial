import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserInfoFeedback } from '../../interfaces';
import { FeedbackSuccessPage } from '../feedback-success/feedback-success';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  userInfo: UserInfoFeedback = <UserInfoFeedback>{};

  formSubmitBtnTouched = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  sendFeedback() {
    this.navCtrl.setRoot(FeedbackSuccessPage);
  }

}
