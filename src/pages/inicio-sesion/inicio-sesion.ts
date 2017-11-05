import { AutSesiProvider } from './../../providers/aut-sesi/aut-sesi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public autSesi:AutSesiProvider
  ) {
  }

  registrarUsuario(formulario: NgForm){
    this.autSesi.registrarse(formulario.value.correo,formulario.value.acceso);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

}
