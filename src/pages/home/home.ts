import {Injectable, Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
<<<<<<< HEAD

=======
>>>>>>> KML
@Injectable()
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
<<<<<<< HEAD
  public static mapa;
  public barraActiva=false; 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, 
    public alertCtrl: AlertController) {  
         
    }
    barraBuscadora(){
      this.barraActiva=!(this.barraActiva);
      }
=======
  map: any;
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
 
>>>>>>> KML
  ionViewDidLoad(){
    HomePage.mapa=this.initMap();
    window.alert('ionView = '+HomePage.mapa);
    return HomePage.mapa;
  }


//PARA ABAJO
<<<<<<< HEAD
  initMap(dir:any=null) {
    //window.alert('Inicio '+this.map);
    
    HomePage.mapa = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });

    //window.alert('initMap = '+HomePage.mapa);

    if(dir=='ubicacion'){
      this.Ubicacion();
      //this.InsertarKML(HomePage.mapa);
    }
    
    return HomePage.mapa;
    //var infoWindow = new google.maps.InfoWindow({map: map});
  }
  
  InsertarKML(map, nKml:any){

    var dir:string;

    var ctaLayer = new google.maps.KmlLayer({
              url: //"https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/5A%CEV.kml",
              'https://www.github.com/Slar04/Departamento-de-Sistemas-/master/Linea%20Universitaria%20KML.kml',
              //url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
              map: map/*this.map*/
            });

    //window.alert('1 Insertar '+/*this.*/map);
  }

  // Modelo de geolicalización.
  Ubicacion(){
    //window.alert('Ubicacion 1 '+HomePage.mapa);

   if (navigator.geolocation) {
=======
     initMap(dir: string) {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });

    //var infoWindow = new google.maps.InfoWindow({map: map});
    
    // Modelo de geolicalización.
    if (navigator.geolocation) {
>>>>>>> KML
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        var marker = new google.maps.Marker({
          position: pos,
          map: HomePage.mapa,
          title: "Tu posición"
        });
<<<<<<< HEAD
        
        HomePage.mapa.setCenter(pos);
=======

        if(dir!='0'){
          //window.alert("Entro");
        /*var ctaLayer = new google.maps.KmlLayer({
          url: 'https://github.com/Hijacs/ArchivosIDI/blob/master/1A%20Bosques%20Finca%20Morelos.kmz',
          map: map,
          suppressInfoWindows: true,
        });*/
        var kmzLayer = new google.maps.KmlLayer('https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20BFM.kml');
        kmzLayer.setMap(map);
      }

        //map.setCenter(pos);
>>>>>>> KML
      }, function() {
        var infoWindow = new google.maps.InfoWindow({map: HomePage.mapa});
        infoWindow.setPosition(HomePage.mapa.getCenter());
        infoWindow.setContent(true ?
                              'No se permite geolocalización.' :
                              'El navegador no soporta geolocalización.');
      });
  } else {
    // No se permite Geolocalización
    var infoWindow = new google.maps.InfoWindow({map: HomePage.mapa});
    infoWindow.setPosition(HomePage.mapa.getCenter());
    infoWindow.setContent(false ?
                          'No se permite geolocalización.' :
                          'El navegador no soporta geolocalización.');
  }

  MKML(){

    $(document).ready(() => {
      this.initMap('1A BFM');
               });
    
  }
  
 //PARA ARRIBA
}
