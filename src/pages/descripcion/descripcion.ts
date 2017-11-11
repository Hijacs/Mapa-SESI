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
    
    this.navCtrl.push(HomePage);
    
    $(document).ready(() => {
        this.map = this.homePage.ionViewDidLoad();

        //window.alert('map = '+this.map);
        
        this.homePage.InsertarKML(this.map, nKml);
    });
  }

}
