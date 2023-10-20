import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  Usuario: string = "";
  nombre: string = "";
  Password: string= "";
  
  formularioLogin = this.fb.group({
    nombre: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    Password: ["",[Validators.required,Validators.maxLength(4),Validators.minLength(4)]]
  });

  constructor(public fb: FormBuilder, 
    public alertController: AlertController, private navCtrl: NavController  ) {   }

  ngOnInit() {
  }
  
  async goDatosP(){
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
    var usuario = JSON.parse(usuarioString);
    } else {
      console.log('Error')
      }

    if(usuario.nombre == f.nombre && usuario.Password == f.Password){
      const alert = await this.alertController.create({
        header:'Datos Correctos',
        message: 'Los datos que ingresaste son correcto',
        buttons: ['Iniciar']
        
      });
      this.navCtrl.navigateRoot('home') 
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header:'Datos Incorrectos',
        message: 'Los datos que aceptaste no son correctos',
        buttons : ['Aceptar']
      });
      await alert.present();
    }
  
  }

  movLimpiar() {
    const inputElement = document.querySelector('ion-input') as HTMLElement;
    const inputElement2 = document.querySelector('.ion-input') as HTMLElement;
    const animation = createAnimation()
      .addElement(inputElement)
      .addElement(inputElement2)
      .duration(800)
      .iterations(1)
      .fromTo('transform', 'translateX(-20px)', 'translateX(300px)')
      .fromTo('opacity', '1', '0.0');
    animation.play();
    this.nombre; ' ';
    this.Password; ' ';

  }


}
  