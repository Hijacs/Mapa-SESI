import { DescripcionPage } from './../descripcion/descripcion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LineasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lineas',
  templateUrl: 'lineas.html',
})
export class LineasPage {
  descripcionPage=DescripcionPage;
lineas=[
 {
   nombre:'1A Bosques Finca Morelos',
   imagen:'',
   horario:'',
   costo:'',
   inicio:'',
   fin:''
 },
 {
   nombre:'1A Bosques Villa',
   imagen:'',
   horario:'',
   costo:'',
   inicio:'',
   fin:''
 },
 {
  nombre:'1A Jilotepec Parajes 66',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Jilotepec Parajes Directo',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Jilotepec UNITEC',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Jilotepec UNITEC directo',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Lomas UNITEC',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Lomas Parajes',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Morelos Durango Felix Candela',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Morelos Eco2000',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Ramal Paseo Parajes (express)',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1A Ramal Paseo UNITEC',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1B Ramal Av de las torres directo',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'1B Ramal Express Av de las torres',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
},
{
  nombre:'2B Ramal Barrio Alto',
  imagen:'',
  horario:'',
  costo:'',
  inicio:'',
  fin:''
}
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineasPage');
  }

}
