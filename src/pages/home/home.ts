import {Injectable, Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
@Injectable()
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
     initMap(dir: string) {
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

        if(dir!='0'){
          //window.alert("Entro");
        /*var ctaLayer = new google.maps.KmlLayer({
          url: 'https://github.com/Hijacs/ArchivosIDI/blob/master/1A%20Bosques%20Finca%20Morelos.kmz',
          map: map,
          suppressInfoWindows: true,
        });*/
        var kmzLayer = new google.maps.KmlLayer('https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/'+dir+'.kml');
        kmzLayer.setMap(map);
      }

        //map.setCenter(pos);
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

  MKML(){

    $(document).ready(() => {
      this.initMap('1B');
               });
    
  }
  
 //PARA ARRIBA
}

