import { Component } from '@angular/core';
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
})
export class DescripcionPage {

descripcion:Object;
  
constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.descripcion=navParams.data;
  }

 

}
