import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the AutSesiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutSesiProvider {

  constructor(public http: Http,private firebaseAuth:AngularFireAuth) {
    console.log('Hello AutSesiProvider Provider');
  }
  registrarse(correo:string,clave:string){
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(correo,clave)
    .then(value=>{console.log('Ok, registrado',value)})
    .catch(
        err=>{console.log('Existe un error:',err.message);
        });
}
iniciarSesion(correo:string,clave:string){
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(correo,clave)
    .then(value=>{
        console.log('Bien, has ingresado');
    })
    .catch(err=>{
        console.log('Algo no anda bien, codigo de error:',err.message);
    });
} 
cerrarSesion(){
    this.firebaseAuth
    .auth
    .signOut();
}
}
