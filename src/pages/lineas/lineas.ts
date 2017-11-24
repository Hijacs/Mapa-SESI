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
   lin:"1A",
   nombre:"Bosques Finca Morelos",
   imagen:"",
   horario:"",
   costo:"",
   inicio:"",
   fin:""
 },
 {
  lin:"1A",
   nombre:"Bosques Villa",
   imagen:"",
   horario:"",
   costo:"",
   inicio:"",
   fin:""
 },
 {
  lin:"1A",
  nombre:"Jilotepec Parajes 66",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Jilotepec Parajes Directo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Jilotepec UNITEC",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Jilotepec UNITEC directo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Lomas UNITEC",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Lomas Parajes",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Morelos Durango Felix Candela",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Morelos Eco2000",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Paseo Parajes (express)",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1A",
  nombre:"Paseo UNITEC",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1B",
  nombre:"Av de las torres directo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"1B",
  nombre:"Express Av de las torres",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2B",
  nombre:"Barrio Alto",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2B",
  nombre:"Chihuahua Campa",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2B",
  nombre:"Chihuahua Himno",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2B",
  nombre:"Figueroa",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2B",
  nombre:"Sierra",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"2L",
  nombre:"Fornteriza por 16",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
}
,
{
  lin:"2L",
  nombre:"Periodista",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"3A",
  nombre:"Altamirano Piedrera",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"3A",
  nombre:"Altamirano",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"3A",
  nombre:"Velarde",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5A",
  nombre:"Cereso a Col km 20",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5A",
  nombre:"Cereso a Col safari",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5A",
  nombre:"Cereso por eje vial",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5A",
  nombre:"Pantoja",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5B",
  nombre:"Granjas Felipe",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5B",
  nombre:"Granjas pavo real",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5B",
  nombre:"Revolución por eje",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5B",
  nombre:"Tercera por curva",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"5B",
  nombre:"Tercera por eje vial",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"8A",
  nombre:"Curva",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"8A",
  nombre:"Las locas",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"8A",
  nombre:"Seguro nuevo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Km 18 San Lorenzo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Erendida San Lorenzo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Km 18 Centro",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Km 20 Mezquital Centro",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Km 20 Mezquital San Lorenzo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Lucio Blanco",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"L4",
  nombre:"Fidel Velazquez",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
}
];
LineasPrincipales=[
{
  nombre:"1A"
}
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineasPage');
  }

}
