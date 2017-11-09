import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Observable';
//import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the AutSesiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutSesiProvider {

  constructor(private miAut:AngularFireAuth) {
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
 /*
cerrarSesion(){
    this.firebaseAuth
    .auth
    .signOut();
}*/
}
