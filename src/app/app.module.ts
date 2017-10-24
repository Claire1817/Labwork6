import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AboutPage } from '../pages/about/about';
import { CvPage } from '../pages/cv/cv';
import { ContactPage } from '../pages/contact/contact';

var firebaseConfig = {
  apiKey: "AIzaSyDHXPOevL35ZPZx25lrrhMTeMgpmlRv3Bs",
  authDomain: "labwork5-bfcb8.firebaseapp.com",
  databaseURL: "https://labwork5-bfcb8.firebaseio.com",
  projectId: "labwork5-bfcb8",
  storageBucket: "labwork5-bfcb8.appspot.com",
  messagingSenderId: "625626025533"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    CvPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    CvPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
