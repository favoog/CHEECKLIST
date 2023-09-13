import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  Usuario = localStorage.getItem("usuario");

  formularioRegistrar = this.fb.group({
    nombre: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    Password: ["",[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
    confirmacionPassword: ["",[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
    apellido: ["",[Validators.required]],
    rut: ["",[Validators.required]],
    escuela: ["",[Validators.required]],
    carrera: ["",[Validators.required]],
    correo: ["",[Validators.required]],
    usuario: ["",[Validators.required]]
    

  });

  constructor(public fb: FormBuilder,public alertController: AlertController) {
   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistrar.value;

    if(this.formularioRegistrar.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos!!',
        message: 'Por favor tienes que rellenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    
    var Usuario = {
      nombre: f.nombre,
      Password: f.Password,
      apellido: f.apellido,
      rut: f.rut,
      escuela: f.escuela,
      carrera: f.carrera,
      correo: f.correo,
      usuario: f.usuario

    }
    localStorage.setItem('usuario',JSON.stringify(Usuario));
  }

}