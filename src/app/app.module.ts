import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// In memeory reset Api
// We use this for demo purpose only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// services
import { AppProductService, InMemoryDataService, AppHttpService } from '../shared/services';

import { AppPipes } from '../shared/pipes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckoutSuccessPage } from '../pages/checkout-success/checkout-success';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackSuccessPage } from '../pages/feedback-success/feedback-success';

import { AppProductCardComponent } from '../shared/components/app-product-card.component';

@NgModule({
  declarations: [
    ...AppPipes,
    MyApp,
    HomePage,
    CartPage,
    CheckoutPage,
    CheckoutSuccessPage,
    FeedbackPage,
    FeedbackSuccessPage,
    AppProductCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartPage,
    CheckoutPage,
    CheckoutSuccessPage,
    FeedbackPage,
    FeedbackSuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AppProductService, {provide: Http, useClass: AppHttpService, deps: [XHRBackend, RequestOptions]}]
})
export class AppModule {}
