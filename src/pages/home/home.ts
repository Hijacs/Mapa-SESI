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
 
  @ViewChild('map') mapElement: ElementRef;
  public static mapa;
  public barraActiva=false; 

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
      zoom: 11.5
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

    
    dir="https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/kml/"+nKml;

    
   
    var ctaLayer = new google.maps.KmlLayer({
              url: dir/*nKml*/,
              map: map/*this.map*/
            });
            this.Ubicacion();
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
          title: "Mi posición"
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
