import { Component,ViewChild } from '@angular/core';
import { Platform, NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PaginaInicialPage } from '../pages/pagina-inicial/pagina-inicial';
import { HomePage } from '../pages/home/home';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { LineasPage } from './../pages/lineas/lineas';
import { AutSesiProvider } from './../providers/aut-sesi/aut-sesi';


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

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuCtrl:MenuController,
    private aut:AutSesiProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.aut.sesion.subscribe(sesion=>{
        if (sesion){
          this.paginas.setRoot(LineasPage);
        } else
        {this.paginas.setRoot(PaginaInicialPage)}
      });
      /*.Session.subscribe(session=>{

      })*/
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }
  irAPagina(pagina){
    this.paginas.setRoot(pagina);
    this.menuCtrl.close();
    }
    
    cerrarSesion(){
    this.aut.cerrarSesion();
    this.paginas.setRoot(PaginaInicialPage);
    this.menuCtrl.close();
    }
}

