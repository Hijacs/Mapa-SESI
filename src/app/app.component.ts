import { Component,ViewChild } from '@angular/core';
import { Platform, NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PaginaInicialPage } from '../pages/pagina-inicial/pagina-inicial';
import { HomePage } from '../pages/home/home';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { LineasPage } from './../pages/lineas/lineas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PaginaInicialPage;
  mapaPrincipal=HomePage;
  paginaPrincipal=PaginaInicialPage;
  iniciarSesion=InicioSesionPage;
  lineas=LineasPage;

@ViewChild('paginas') paginas:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  irAPagina(pagina){
    this.paginas.setRoot(pagina);
    this.menuCtrl.close();
    }
    
    cerrarsesion(){
    
    }
}

