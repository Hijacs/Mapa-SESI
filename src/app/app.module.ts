import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { AutSesiProvider } from '../providers/aut-sesi/aut-sesi';
export const firebaseConfig={
  apiKey: "AIzaSyAYWoHxi4yAgozEKYFwTSR6HLUHyxRpUMo",
  authDomain: "sesi-d8563.firebaseapp.com",
  databaseURL: "https://sesi-d8563.firebaseio.com",
  projectId: "sesi-d8563",
  storageBucket: "sesi-d8563.appspot.com",
  messagingSenderId: "496838532341"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
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
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutSesiProvider
  ]
})
export class AppModule {}

