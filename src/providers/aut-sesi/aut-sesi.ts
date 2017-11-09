import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AutSesiProvider {
    [x: string]: any;

  constructor(private miAut:AngularFireAuth,
public alertCtrl:AlertController) {
    console.log('Hola AutSesiProvider Provider');
  }

  
   registrarse(email:string,password:string){
   
        return this.miAut.auth.createUserWithEmailAndPassword(email,password)
        .then((res)=>{console.log('Existe un error:',res.message);})
        .catch(err=>Promise.reject(err))
    }
   
iniciarSesion(email:string,password:string){
    return this.miAut.auth.signInWithEmailAndPassword(email,password)
    .then(email=>Promise.resolve(email))
    .catch(err=>Promise.reject(err)
    )
} 

get sesion(){
    return this.miAut.authState;
}
 
cerrarSesion(){
    this.miAut
    .auth
    .signOut()
    .then((res)=>{
       /* let alert=this.alertCtrl.create({
         title:'Sesion',
         message:'La sesión ha sido cerrada satisfactoriamente',
         buttons:['Aceptar']
        });
    alert.present();*/})

    
}
}
