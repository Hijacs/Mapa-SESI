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
   imagen:"./../assets/rutas/1A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
 },
 {
  lin:"1A",
   nombre:"Bosques Villa",
   imagen:"./../assets/rutas/1A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
 },
 {
  lin:"1A",
  nombre:"Jilotepec Parajes 66",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Jilotepec Parajes Directo",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"

},
{
  lin:"1A",
  nombre:"Jilotepec UNITEC",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Jilotepec UNITEC directo",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Lomas UNITEC",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Lomas Parajes",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Morelos Durango Felix Candela",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Morelos Eco2000",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Paseo Parajes (express)",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1A",
  nombre:"Paseo UNITEC",
  imagen:"./../assets/rutas/1A1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"1B",
  nombre:"Av de las torres directo",
  imagen:"./../assets/rutas/1B1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
  },
{
  lin:"1B",
  nombre:"Express Av de las torres",
  imagen:"./../assets/rutas/1B1.jpg",
  horario:"4:00-22:00 hrs",
  costo:"8 pesos",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2B",
  nombre:"Barrio Alto",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2B",
  nombre:"Chihuahua Campa",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2B",
  nombre:"Chihuahua Himno",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2B",
  nombre:"Figueroa",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2B",
  nombre:"Sierra",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2L",
  nombre:"Fornteriza por 16",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"2L",
  nombre:"Periodista",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"3A",
  nombre:"Altamirano Piedrera",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"3A",
  nombre:"Altamirano",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"3A",
  nombre:"Velarde",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5A",
  nombre:"Cereso a Col km 20",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5A",
  nombre:"Cereso a Col safari",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5A",
  nombre:"Cereso por eje vial",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5A",
  nombre:"Pantoja",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5B",
  nombre:"Granjas Felipe",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5B",
  nombre:"Granjas pavo real",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5B",
  nombre:"Revolución por eje",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5B",
  nombre:"Tercera por curva",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"5B",
  nombre:"Tercera por eje vial",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"8A",
  nombre:"Curva",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"8A",
  nombre:"Las locas",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"8A",
  nombre:"Seguro nuevo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
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
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Juarez Aeropuerto",
  nombre:"Km 18 Centro",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
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
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
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
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"8B",
  nombre:"Seguro Nuevo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Avicola abajo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Avicola Arriba",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Rancho derecho",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Rancho izquierda",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Rancho poleo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Retiro",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Sarabia abajo",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Linea 10",
  nombre:"Saravia arriba",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:""
},
{
  lin:"Circumvalación",
  nombre:"",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Mercado de abastos",
  nombre:"Flores Magón",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Mercado de abastos",
  nombre:"Galeana",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Mercado de abastos",
  nombre:"Los ojitos",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Mercado de abastos",
  nombre:"Palo Chino",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Universitaria",
  nombre:"Flores Magón",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"PU",
  nombre:"Granjero",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"PU",
  nombre:"Km30",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"PU",
  nombre:"Lomas",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Valle de Juarez",
  nombre:"Riveras 1-4",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Valle de Juarez",
  nombre:"Riveras 6-8",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
},
{
  lin:"Valle de Juarez",
  nombre:"Tierra Nueva segunda etapa",
  imagen:"",
  horario:"",
  costo:"",
  inicio:"",
  fin:"",
  kml:"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml"
}
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineasPage');
  }

}
