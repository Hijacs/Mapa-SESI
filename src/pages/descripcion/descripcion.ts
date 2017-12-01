import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';
import * as $ from 'jquery';

/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
  providers: [HomePage]
})
export class DescripcionPage {

descripcion:Object;
map:Object;
  
constructor(public navCtrl: NavController, public navParams: NavParams,
   public homePage: HomePage) {
  this.descripcion=navParams.data;
  this.map=this.map;
  }

  KML(nKml){
    
    this.navCtrl.setRoot(HomePage);
    
    $(document).ready(() => {
        this.map = this.homePage.ionViewDidLoad();

        //window.alert('map = '+this.map);

       /* switch(nKml){
          case '1A Bosques Finca Morelos':
              nKml='1A BFM';
          break;
          case '1A Bosques Vila':
              nKml='1A BV';
          break;
          case '1A Jilotepec Parajes 66':

          break;
          case '1A Jilotepec Parajes Directo':
          
          break;
          case '1A Jilotepec UNITEC':
          
          break;
          case '1A Jilotepec UNITEC Directo':
          
          break;
          case '1A Lomas UNITEC':
              nKml='1A L-UNI';
          break;
          case '1A Lomas Parajes':
          
          break;
          case '1A Morelos Durango Felix Candela':
          
          break;
          case '1A Morelos Eco2000':
              nKml='1A ME2000';
          break;
          case '1A Paseo Parajes (express)':

          break;
          case '1A Paseo UNITEC':
              nKml='1A P-UNI';
          break;
          case '1B Express Av de las Torres':
              nKml='1B ET';
          break;
          case '1B Av de las Torres Directo':
          
          break;
          case '2B Barrio Alto':
          
          break;
          case '2B Chihuahua Campa':
          
          break;
          case '2B Chihuahua Himno':
          
          break;
          case '2B Figueroa':
          
          break;
          case '2B Sierra':
          
          break;
          case '2L Fronteriza por 16':
          
          break;
          case '2L Periodista':
          
          break;
          case '3A Altamirano Piedrera':

          break;
          case '3A Altamirano':
              nKml='3A A';
          break;
          case '3A Velarde':

          break;
          case '':

          break;

        }*/

        this.homePage.InsertarKML(this.map, nKml);
    });
  }

}
