import { DescripcionPage } from './../pages/descripcion/descripcion';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AutSesiProvider } from '../providers/aut-sesi/aut-sesi';
import { PaginaInicialPage } from './../pages/pagina-inicial/pagina-inicial';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { LineasPage } from './../pages/lineas/lineas';
import { HomePage } from '../pages/home/home';
import { LprincipalesPage } from '../pages/lprincipales/lprincipales';
//import { Storage } from '@ionic/storage';

export const firebaseConfig={

   apiKey: "AIzaSyBAO8dPaEIUOO5PMHw58fdSbw306EwunDA",
  authDomain: "suben2-5351.firebaseapp.com",
  databaseURL: "https://suben2-5351.firebaseio.com",
  projectId: "suben2-5351",
  storageBucket: "suben2-5351.appspot.com",
  messagingSenderId: "292512067222"

 /*  

apiKey: "AIzaSyBDcTLGhx6yzgZlXCrjyBz6DgDdvnqLDu0",
  authDomain: "suben-5351.firebaseapp.com",
  databaseURL: "https://suben-5351.firebaseio.com",
  projectId: "suben-5351",
  storageBucket: "suben-5351.appspot.com",
  messagingSenderId: "949271161321"

  apiKey: "AIzaSyAYWoHxi4yAgozEKYFwTSR6HLUHyxRpUMo",
  authDomain: "sesi-d8563.firebaseapp.com",
  databaseURL: "https://sesi-d8563.firebaseio.com",
  projectId: "sesi-d8563",
  storageBucket: "sesi-d8563.appspot.com",
  messagingSenderId: "496838532341"*/
};
@NgModule({
  declarations: [
    MyApp,
    PaginaInicialPage,
    HomePage,
    InicioSesionPage,
    LineasPage,
    DescripcionPage,
    LprincipalesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaginaInicialPage,
    HomePage,
    InicioSesionPage,
    LineasPage,
    DescripcionPage,
    LprincipalesPage
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
   // Storage
  ]
})
export class AppModule {}

