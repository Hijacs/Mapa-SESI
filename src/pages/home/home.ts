import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 12
    });
  }
  
//PARA ABAJO
     initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });
    
    //var infoWindow = new google.maps.InfoWindow({map: map});

    // Modelo de geolicalización.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "Tu posición"
        });

        var ctaLayer = new google.maps.KmlLayer({
          url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
          map: map,
          //suppressInfoWindows: true,
        });    

        map.setCenter(pos);
      }, function() {
        var infoWindow = new google.maps.InfoWindow({map: map});
        infoWindow.setPosition(map.getCenter());
        infoWindow.setContent(true ?
                              'No se permite geolocalización.' :
                              'El navegador no soporta geolocalización.');
      });
    } else {
      // No se permite Geolocalización
      var infoWindow = new google.maps.InfoWindow({map: map});
      infoWindow.setPosition(map.getCenter());
      infoWindow.setContent(false ?
                            'No se permite geolocalización.' :
                            'El navegador no soporta geolocalización.');
    }
  }
  

 //PARA ARRIBA
}

