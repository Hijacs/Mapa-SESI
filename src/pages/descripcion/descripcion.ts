import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KMLService, HomePage } from './../home/home';

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
  
constructor(public navCtrl: NavController, public navParams: NavParams/*, public kmlService: KMLService*/, public homePage: HomePage) {
  this.descripcion=navParams.data;
  }

  KML(){
    this.navCtrl.setRoot(HomePage);
    //this.homePage.initMap();
    this.homePage.InsertarKML();
  }

}
