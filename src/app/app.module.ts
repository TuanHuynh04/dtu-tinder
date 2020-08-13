import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, ROUTES, Routes } from '@angular/router';

const firebaseConfig = {
  apiKey: 'AIzaSyCCI_D3TN3pujQLHSL3LMNxxaQvmcTG7SA',
  authDomain: 'dtu-tinder.firebaseapp.com',
  databaseURL: 'https://dtu-tinder.firebaseio.com',
  projectId: 'dtu-tinder',
  storageBucket: 'dtu-tinder.appspot.com',
  messagingSenderId: '700494130916',
  appId: '1:700494130916:web:3cdc6a73aa5a0566ab06f1',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
