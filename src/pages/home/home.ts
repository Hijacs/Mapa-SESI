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
 /*
  @ViewChild('map') mapElement: ElementRef;*/
  map: GoogleMaps;

  static mapa;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController, public googleMaps: GoogleMaps) {  }
 
  ionViewDidLoad(){
    HomePage.mapa=this.map = this.initMap();
    //this.InsertarKML();
  }

  /*loadMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 12
    });
  }*/
  
//PARA ABAJO
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.7333300, lng: -106.4833300},
      zoom: 15
    });
    
    return this.map;
    //var infoWindow = new google.maps.InfoWindow({map: map});
  }
  
  // Modelo de geolicalización.
  Ubicacion(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        var marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          title: "Tu posición"
        });    

        this.map.setCenter(pos);
      }, function() {
        var infoWindow = new google.maps.InfoWindow({map: this.map});
        infoWindow.setPosition(this.map.getCenter());
        infoWindow.setContent(true ?
                              'No se permite geolocalización.' :
                              'El navegador no soporta geolocalización.');
      });
  } else {
    // No se permite Geolocalización
    var infoWindow = new google.maps.InfoWindow({map: this.map});
    infoWindow.setPosition(HomePage.mapa.getCenter());
    infoWindow.setContent(false ?
                          'No se permite geolocalización.' :
                          'El navegador no soporta geolocalización.');
  }
}
 //PARA ARRIBA

 presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Si jala prro',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

  InsertarKML(){
    //this.presentAlert();
    var ctaLayer;

    ctaLayer = new google.maps.KmlLayer({
              url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
              map: this.map
            });

    this.presentAlert();
  }

}

@Injectable()
export class KMLService extends HomePage{
  
}