import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController para la navegación
import { AlertController } from '@ionic/angular'; // Importa AlertController para mostrar alertas

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage {

  usuario: string = '';
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) { } // Inyecta NavController y AlertController

  goBack() {
    // Esta función utiliza el NavController para regresar a la página anterior
    this.navCtrl.back();
  }

  async enviarRecuperacion() { // Marca la función como async
    // Valida que los campos no estén vacíos
    if (!this.usuario || !this.nuevaContrasena || !this.confirmarContrasena) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Valida que las contraseñas coincidan
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      const alert = await this.alertController.create({
        header: 'Contraseñas no coinciden',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Aquí debes implementar la lógica para enviar la solicitud de recuperación de contraseña
    // Esto podría involucrar hacer una solicitud HTTP a tu servidor para procesar la recuperación

    // Supongamos que tienes un servicio de recuperación de contraseña que espera los datos en un formato específico
    const datosRecuperacion = {
      usuario: this.usuario,
      nuevaContrasena: this.nuevaContrasena,
    };

    try {
      // Realiza una solicitud HTTP POST al servicio de recuperación
      // Aquí, reemplaza 'tu-servicio-recuperacion' por la URL real de tu servicio
      const response = await fetch('tu-servicio-recuperacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosRecuperacion),
      });

      if (response.ok) {
        // La recuperación se realizó con éxito, puedes redirigir al usuario o mostrar un mensaje
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Recuperación de contraseña exitosa',
          buttons: ['OK']
        });
        await alert.present();
      } else {
        // Hubo un problema en la recuperación, maneja el error apropiadamente
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Error en la recuperación de contraseña',
          buttons: ['OK']
        });
        await alert.present();
      }
    } catch (error) {
      // Maneja los errores de la solicitud, como problemas de conexión
      console.error('Error en la solicitud:', error);
    }
  }
}