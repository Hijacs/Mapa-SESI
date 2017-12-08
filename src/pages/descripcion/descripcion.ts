import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import * as $ from 'jquery';



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

  KML(nKml:any){
    this.navCtrl.push(HomePage);
   
    //var nKml;
    //window.alert('Entré perro');
    $(document).ready(() => {
        this.map = this.homePage.ionViewDidLoad();

        //window.alert('map = '+nKml);

        this.homePage.InsertarKML(this.map, nKml);
    });
  }

}
