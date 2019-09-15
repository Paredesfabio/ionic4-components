import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'alert page';

  constructor(private alertCtlr: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtlr.create({
      header: 'Aert',
      backdropDismiss: false,
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingresar Nombre'
        },
        {
          name: 'txtApellido',
          type: 'text',
          placeholder: 'Ingresar Apellido'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => console.log('Confirm Cancel')

        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = `${data.txtNombre} ${data.txtApellido}`;
          }
        }
      ]
    });

    await alert.present();
  }

}
