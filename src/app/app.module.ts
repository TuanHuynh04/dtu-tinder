import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: 'AIzaSyCCI_D3TN3pujQLHSL3LMNxxaQvmcTG7SA',
  authDomain: 'dtu-tinder.firebaseapp.com',
  databaseURL: 'https://dtu-tinder.firebaseio.com',
  projectId: 'dtu-tinder',
  storageBucket: 'dtu-tinder.appspot.com',
  messagingSenderId: '700494130916',
  appId: '1:700494130916:web:3cdc6a73aa5a0566ab06f1',
};

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
