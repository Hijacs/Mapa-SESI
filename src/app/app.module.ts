import { DescripcionPage } from './../pages/descripcion/descripcion';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AutSesiProvider } from '../providers/aut-sesi/aut-sesi';
import { PaginaInicialPage } from './../pages/pagina-inicial/pagina-inicial';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { LineasPage } from './../pages/lineas/lineas';
import { HomePage } from '../pages/home/home';

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
    PaginaInicialPage,
    HomePage,
    InicioSesionPage,
    LineasPage,
    DescripcionPage
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
    PaginaInicialPage,
    HomePage,
    InicioSesionPage,
    LineasPage,
    DescripcionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    /*HomePage,
    KMLService,*/
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutSesiProvider
  ]
})
export class AppModule {}

