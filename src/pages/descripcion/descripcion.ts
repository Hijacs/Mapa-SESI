import { GoogleMaps } from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';

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
  
constructor(public navCtrl: NavController, public navParams: NavParams, public homePage: HomePage, public googleMaps: GoogleMaps) {
  this.descripcion=navParams.data;
  this.map=this.map;
  }

  KML(){
    //var map;
    this.navCtrl.setRoot(HomePage);
    /*this.map =*/ this.homePage.ionViewDidLoad();
    window.alert('map = '+this.map);

    
    //this.homePage.InsertarKML(this.map);
  }

}
