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
  
  goDatosP(){
    const userValue = this.formularioLogin.get('nombre')?.value;
    this.navCtrl.navigateForward(`/logeado/${userValue}`);
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
  