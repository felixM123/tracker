import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/usuario/usuario';
//import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public _usuarioProv: UsuarioProvider) {
  }

  ionViewDidLoad() {

    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;

  }

  mostrarInput(){

    this.alertCtrl.create({
      title: 'Ingrese el usuario',
      inputs: [{
        name: 'username',
        placeholder: 'Username'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },{
        text: 'Ingresar',
        handler: data => {
          this.verificarUsuario( data.username )
        }
      }]
    }).present();

  }

  verificarUsuario( clave: string ) {

    let loading = this.loadingCtrl.create({
      content: 'Verificando'
    });

    loading.present();

    this._usuarioProv.verificaUsuario( clave )
          .then( )



          setTimeout(()=>{
            loading.dismiss();

          },3000);


     }


}
