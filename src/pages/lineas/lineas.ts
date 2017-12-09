import { DescripcionPage } from './../descripcion/descripcion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Alert } from 'ionic-angular/components/alert/alert';
import { LprincipalesPage } from '../lprincipales/lprincipales';


/**
 * Generated class for the LineasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var linkRuta='https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/rutas/';

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
    imagen:linkRuta+"1ABFM.jpg",
    horario:"4:00-22:00 hrs",
    costo:"8 pesos",
    inicio:"Federico de la Vega Mathews",
    fin:"Francisco Membrilla",
    kml:"1ABFM.kml"
  },
  {
   lin:"1A",
    nombre:"Bosques Villa",
    imagen:linkRuta+"1A1.jpg",
    horario:"4:00-22:00 hrs",
    costo:"8 pesos",
    inicio:"",
    fin:"",
    kml:"1ABV.kml"
  },
  {
   lin:"1A",
   nombre:"Jilotepec Parajes 66",
   imagen:linkRuta+"1A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1AP66.kml"
 },
 {
   lin:"1A",
   nombre:"Jilotepec Parajes Directo",
   imagen:linkRuta+"1A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1APD.kml"
 
 },
 {
   lin:"1A",
   nombre:"Jilotepec UNITEC",
   imagen:linkRuta+"1AUNI.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1AJD.kml"
 },
 {
   lin:"1A",
   nombre:"Jilotepec UNITEC directo",
   imagen:linkRuta+"1AUNI2.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Senderos de Andalucia",
   fin:"C. Francisco Membrilla",
   kml:"1AUNID.kml"
 },
 {
   lin:"1A",
   nombre:"Lomas UNITEC",
   imagen:linkRuta+"1AUNI.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1ALUNI.kml"
 },
 {
   lin:"1A",
   nombre:"Lomas Parajes",
   imagen:linkRuta+"1A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. José de Jesus Macias Delgado",
   fin:"C. Francisco Membrilla",
   kml:"1ALP.kml"
 },
 {
   lin:"1A",
   nombre:"Morelos Durango Felix Candela",
   imagen:linkRuta+"1AMD.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Federico de la Vega Mathews",
   fin:"C. Manuel Acuña",
   kml:"1AMD.kml"
 },
 {
   lin:"1A",
   nombre:"Morelos Eco2000",
   imagen:linkRuta+"1AME2000.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Federico de la Vega Mathews",
   fin:"C. Joaquin Terrazas",
   kml:"1AME2000.kml"
 },
 {
   lin:"1A",
   nombre:"Paseo Parajes Express",
   imagen:linkRuta+"1APP.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Fundadores de América",
   fin:"C. Manuel Acuña",
   kml:"1APPE.kml"
 },
 {
   lin:"1A",
   nombre:"Paseo UNITEC",
   imagen:linkRuta+"1APUNI.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1APUNI.kml"
 },
 {
   lin:"1B",
   nombre:"Av de las Torres Directo",
   imagen:linkRuta+"1B1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"1BTD.kml"
   },
 {
   lin:"1B",
   nombre:"Express Av de las Torres",
   imagen:linkRuta+"1BET.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Sierra Vista",
   fin:"C. Joaquin Terrazas",
   kml:"1BET.kml"
 },
 {
   lin:"2B",
   nombre:"Barrio Alto",
   imagen:linkRuta+"2B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"2BBA.kml"
 },
 {
   lin:"2B",
   nombre:"Chihuahua Campa",
   imagen:linkRuta+"2B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"2BCHC.kml"
 },
 {
   lin:"2B",
   nombre:"Chihuahua Himno",
   imagen:linkRuta+"2B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Antonio Soto y Gama",
   fin:"C. Antonio Soto y Gama",
   kml:"2BCHH.kml"
 },
 {
   lin:"2B",
   nombre:"Figueroa",
   imagen:linkRuta+"2B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"Mariano Escobedo",
   fin:"Mariano Escobedo",
   kml:"2BF.kml"
 },
 {
   lin:"2B",
   nombre:"Sierra",
   imagen:linkRuta+"2B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Isla Carolina",
   fin:"C. Isla Carolina",
   kml:"2BS.kml"
 },
 {
   lin:"2L",
   nombre:"Fronteriza por 16",
   imagen:linkRuta+"2L.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Juvenal Aragon Romo",
   fin:"C. Sinaloa",
   kml:"2LF16.kml"
 },
 {
   lin:"2L",
   nombre:"Periodista",
   imagen:linkRuta+"2L.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"2LP.kml"
 },
 {
   lin:"3A",
   nombre:"Altamirano Piedrera",
   imagen:linkRuta+"3A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"3AAP.kml"
 },
 {
   lin:"3A",
   nombre:"Altamirano",
   imagen:linkRuta+"3A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"3AA.kml"
 },
 {
   lin:"3A",
   nombre:"Velarde",
   imagen:linkRuta+"3A1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"3AV.kml"
 },
 {
   lin:"5A",
   nombre:"Cereso a Col km 20",
   imagen:linkRuta+"5AC.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Ley 6 de Enero",
   fin:"C. Miguel Ahumada",
   kml:"5ACK20.kml"
 },
 {
   lin:"5A",
   nombre:"Cereso a Col Safari",
   imagen:linkRuta+"5AC.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5ACS.kml"
 },
 {
   lin:"5A",
   nombre:"Cereso por Eje Vial",
   imagen:linkRuta+"5AC2.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5ACEV.kml"
 },
 {
   lin:"5A",
   nombre:"Pantoja",
   imagen:linkRuta+"5AP.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5AP.kml"
 },
 {
   lin:"5B",
   nombre:"Granjas Felipe",
   imagen:linkRuta+"5BGF.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Jacinto Benavente (Circunvalacion  Extremo)",
   fin:"C. Internacional (Circunvalacion - Extremo)",
   kml:"5BGF.kml"
 },
 {
   lin:"5B",
   nombre:"Granjas Pavo Real",
   imagen:linkRuta+"5BGPR.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5BGPR.kml"
 },
 {
   lin:"5B",
   nombre:"Revolución por Eje",
   imagen:linkRuta+"5BEV.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5BRE.kml"
 },
 {
   lin:"5B",
   nombre:"Tercera por Curva",
   imagen:linkRuta+"5BC.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5BC.kml"
 },
 {
   lin:"5B",
   nombre:"Tercera por Eje Vial",
   imagen:linkRuta+"5BEV.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"5BEV.kml"
 },
 {
   lin:"8A",
   nombre:"Curva",
   imagen:linkRuta+"8AC.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"8AC.kml"
 },
 {
   lin:"8A",
   nombre:"Las locas",
   imagen:linkRuta+"8ALL.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Dr. Arrollo (Extremo Circunvalación)",
   fin:"C. Ramón Rayón (Extremo Circunvalación)",
   kml:"8ALL.kml"
 },
 {
   lin:"8A",
   nombre:"Seguro Nuevo",
   imagen:linkRuta+"8ASN.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"8ASN.kml"
 },
 {
   lin:"8B",
   nombre:"Seguro Nuevo",
   imagen:linkRuta+"8B.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Eduardo Barrios (Circunvalación)",
   fin:"C. Ingeniero Bernardo Norzagaray (Circunvalación)",
   kml:"8BSN.kml"
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Km 18 San Lorenzo",
   imagen:linkRuta+"JA.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"JAK18SL.kml"
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Erendida San Lorenzo",
   imagen:linkRuta+"JASL.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"JAESL.kml"
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Km 18 Centro",
   imagen:linkRuta+"JA2.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"JAK18.kml"
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Km 20 Mezquital Centro",
   imagen:linkRuta+"JAK20MSL.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"JAK20MC.kml",
   kml:""
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Km 20 Mezquital San Lorenzo",
   imagen:linkRuta+"JAK20MSL.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"Av. Del Charro/Heróico Colegio Militar",
   fin:"C.Miguel de la madrid / C. Luis Zapata",
   kml:"JAK20MSL.kml"
 },
 {
   lin:"Juarez Aeropuerto",
   nombre:"Lucio Blanco",
   imagen:linkRuta+"JA.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"JALB.kml"
 },
 {
   lin:"L4",
   nombre:"Fidel Velazquez",
   imagen:linkRuta+"L4.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Floricultores",
   fin:"C. Ingacio Manuel Altamirano",
   kml:"L4FV.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Avicola Abajo",
   imagen:linkRuta+"10A.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10A1.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Avicola Arriba",
   imagen:linkRuta+"10A.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10A2.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Rancho Derecho",
   imagen:linkRuta+"10RD.jpg",
   horario:"4:00-22:00 hrs",
   costo:"",
   inicio:"8 pesos",
   fin:"",
   kml:"10RD.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Rancho Izquierda",
   imagen:linkRuta+"10RI.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10RI.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Rancho Poleo",
   imagen:linkRuta+"10RP.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10RP.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Retiro",
   imagen:linkRuta+"10R.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10R.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Sarabia abajo",
   imagen:linkRuta+"10S.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10S1.kml"
 },
 {
   lin:"Linea 10",
   nombre:"Saravia arriba",
   imagen:linkRuta+"10S.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"10S2.kml"
 },
 {
   lin:"Circunvalación",
   nombre:"",
   imagen:linkRuta+"LC.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Calzada del Río (Extremo)",
   fin:"C. Cobre (Extremo)",
   kml:"LC.kml"
 },
 {
   lin:"Mercado de Abastos",
   nombre:"Flores Magón",
   imagen:linkRuta+"MA.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"MAFM.kml"
 },
 {
   lin:"Mercado de Abastos",
   nombre:"Galeana",
   imagen:linkRuta+"MAG.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"MAG.kml"
 },
 {
   lin:"Mercado de Abastos",
   nombre:"Los Ojitos",
   imagen:linkRuta+"MA2.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Ingeniero David Herrera Jordán",
   fin:"C. Vistas del Manantial de las Torres",
   kml:"MAO.kml"
 },
 {
   lin:"Mercado de Abastos",
   nombre:"Palo Chino",
   imagen:linkRuta+"MA.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"MAPC.kml"
 },
 {
   lin:"Universitaria",
   nombre:"",
   imagen:linkRuta+"UNI.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Division del Norte",
   fin:"C. Federico de la Vega Mathews",
   kml:"UNI.kml"
 },
 {
   lin:"Permisionarios Unidos",
   nombre:"Granjero",
   imagen:linkRuta+"PU1.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"PUG.kml"
 },
 {
   lin:"Permisionarios Unidos",
   nombre:"Km30",
   imagen:linkRuta+"PU2.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"PUK30.kml"
 },
 {
   lin:"Permisionarios Unidos",
   nombre:"Lomas",
   imagen:linkRuta+"PU3.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"PUL.kml"
 },
 {
   lin:"Valle de Juarez",
   nombre:"Riveras 1-6",
   imagen:linkRuta+"VJR16.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"VJR14.kml"
 },
 {
   lin:"Valle de Juarez",
   nombre:"Riveras 7-8",
   imagen:linkRuta+"VJR78.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"",
   fin:"",
   kml:"VJR78.kml"
 },
 {
   lin:"Valle de Juarez",
   nombre:"Tierra Nueva segunda etapa",
   imagen:linkRuta+"VJTN.jpg",
   horario:"4:00-22:00 hrs",
   costo:"8 pesos",
   inicio:"C. Rivera de División",
   fin:"C. Miguel Hidal y Costilla",
   kml:"VJTN.kml"
 }
];
listaFinal: Array<{ lin: string, nombre: string, imagen: string, horario: string,costo:string,inicio:string, fin:string,kml:string}>;
opcionSeleccionada: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    this.opcionSeleccionada = navParams.data;
    this.listaFinal = [];

    for (let linea of this.lineas) {

      if (linea.lin == this.opcionSeleccionada.lin) {
        this.listaFinal.push({
          lin: linea.lin,
          nombre: linea.nombre,
          imagen: linea.imagen,
          horario: linea.horario, 
          costo: linea.costo,
          inicio: linea.inicio,
          fin: linea.fin,
          kml:linea.kml
        });
      }
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LineasPage');
  }

}
