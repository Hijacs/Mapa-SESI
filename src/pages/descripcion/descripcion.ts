<<<<<<< HEAD
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';
import * as $ from 'jquery';

=======
import { MyApp } from './../../app/app.component';
import { HomePage } from './../home/home';
import { Component, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
>>>>>>> KML
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
  
<<<<<<< HEAD
constructor(public navCtrl: NavController, public navParams: NavParams,
   public homePage: HomePage) {
=======
constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp, public Map:HomePage) {
>>>>>>> KML
  this.descripcion=navParams.data;
  this.map=this.map;
  }

<<<<<<< HEAD
  KML(nKml){
    
    this.navCtrl.push(HomePage);
    
    $(document).ready(() => {
        this.map = this.homePage.ionViewDidLoad();

        //window.alert('map = '+this.map);
        
        this.homePage.InsertarKML(this.map, nKml);
    });
  }
=======
 MostrarKML(){
  this.myApp.irAPagina(HomePage);
  
  this.Map.MKML();
  
 }
>>>>>>> KML

}
