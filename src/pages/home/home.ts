import { LineasPage } from './../lineas/lineas';
import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//import { Places } from '@ionic-native/google-maps';

declare var google;
//declare var map;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  public static mapa;
  public barraActiva=false; 
  public latitude: number;
  public longitude: number;
  search: string;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, 
    public alertCtrl: AlertController) {    }

  barraBuscadora(){
    this.barraActiva=!(this.barraActiva);
  }
 
  ionViewDidLoad(){
    HomePage.mapa=this.initMap();
    //window.alert('ionView = '+HomePage.mapa);
    return HomePage.mapa;
  }
  
//PARA ABAJO
  initMap(dir:any=null) {
    //window.alert('Inicio '+this.map);
    
    HomePage.mapa = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });

    //window.alert('initMap = '+HomePage.mapa);

    let input = document.getElementById('start');
    //let autocomplete = new google.maps.places.Autocomplete(input);
   
    /*
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      let place = autocomplete.getPlace();
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
      alert(this.latitude + ", " + this.longitude);
      console.log(place);
    });*/

    if(dir=='ubicacion'){
      this.Ubicacion();
      //this.InsertarKML(HomePage.mapa);
    }
    
    return HomePage.mapa;
    //var infoWindow = new google.maps.InfoWindow({map: map});
  }
  
  InsertarKML(map, nKml:any){

    var dir:string;

    nKml='https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/'+nKml;

    var ctaLayer = new google.maps.KmlLayer({
              //url: nKml,
              url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
              map: map/*this.map*/
            });

    //window.alert('1 Insertar '+/*this.*/map);
  }

  // Modelo de geolicalización.
  Ubicacion(){
    //window.alert('Ubicacion 1 '+HomePage.mapa);

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
