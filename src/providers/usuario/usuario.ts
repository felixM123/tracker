
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsuarioProvider {
  [x: string]: any;

  constructor(private afDB: AngularFirestore) {

  }

  verificaUsuario(clave:string){

    clave=clave.toLocaleLowerCase();
    return new Promise((resolve,rejet)=>{

      this.afDB.doc('/usuarios/${ clave }')
      .valueChanges().subscribe(data=>{
        console.log(data);

        resolve();
      })


    });
  }

}
