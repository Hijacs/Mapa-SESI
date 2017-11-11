import { MyApp } from './../../app/app.component';
import { HomePage } from './../home/home';
import { Component, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  
constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp, public Map:HomePage) {
  this.descripcion=navParams.data;
  }

 MostrarKML(){
  this.myApp.irAPagina(HomePage);
  
  this.Map.MKML();
  
 }

}
