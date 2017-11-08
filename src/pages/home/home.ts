import { GoogleMaps } from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
//declare var map;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
 
  /*@ViewChild('map') mapElement: ElementRef;*/
  //map: GoogleMaps;
  public static mapa;
  //mapa: GoogleMaps;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController, public googleMaps: GoogleMaps) {  
         // this.map=this.initMap();
    }
 
  ionViewDidLoad(){
    window.alert('ionView');
    HomePage.mapa=this.initMap(null);
    window.alert('Verga puto = '+HomePage.mapa);
    return HomePage.mapa;
  }
  
//PARA ABAJO
  initMap(link:any) {
    //window.alert('Inicio '+this.map);
    
    HomePage.mapa /*= this.map*/ = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });

    window.alert('initMap 1.1 '+HomePage.mapa);

    if(link=='ubicacion'){
      this.Ubicacion();
      this.InsertarKML(HomePage.mapa);
    }
    
    /*if(link=='insertar'){
      this.InsertarKML(this.map);
      window.alert('0insertar '+HomePage.mapa);
    }*/
    return HomePage.mapa;
    //var infoWindow = new google.maps.InfoWindow({map: map});
  }
  
  InsertarKML(map){
    window.alert('Insertar 1 '+/*this.*/map);
    //this.initMap();
    //window.alert('Marca 2 '+/*this.*/map);
    var ctaLayer = new google.maps.KmlLayer({
              url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
              map: map/*this.map*/
            });

    //window.alert('1 Insertar '+/*this.*/map);
  }

  // Modelo de geolicalización.
  Ubicacion(){
    window.alert('Ubicacion 1 '+HomePage.mapa);

   if (navigator.geolocation) {
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
        
        HomePage.mapa.setCenter(pos);
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
}
 //PARA ARRIBA
}
