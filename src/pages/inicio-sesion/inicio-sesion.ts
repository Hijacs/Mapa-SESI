import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AutSesiProvider } from './../../providers/aut-sesi/aut-sesi';

@IonicPage() 

@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {
  usuario={email:'',password:''};

  constructor(public navCtrl: NavController,
     public navParams: NavParams
     ,public autSesi:AutSesiProvider,
     public alertCtrl:AlertController
  ) {
  }

  usuarioNuevo(){
   this.autSesi.registrarse(this.usuario.email,this.usuario.password)
   .then((usuario)=>{
     let alert=this.alertCtrl.create({
      title:'Registro aceptado',
      message:'Su registro es satisfactorio',
      buttons:['Aceptar']
     });
     alert.present();
   })
   .catch((err)=>{
     let alert=this.alertCtrl.create({
      title:'Error',
      subTitle: err.message,
      buttons:['Aceptar']
     });
     alert.present();
   })
   
  }
  inicioDeSesion(){
    this.autSesi.iniciarSesion(this.usuario.email,this.usuario.password)
    .then((email)=>{
    let alert=this.alertCtrl.create({
      title:'Bienvenido',
      message:'Visite nuestra pagina',
      buttons:['Aceptar']
     });
     alert.present();
    })
    .catch((err)=>{
      let alert=this.alertCtrl.create({
        title:'Error',
        subTitle: err.message,
        buttons:['Aceptar']
       });
       alert.present();
    })

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

}
