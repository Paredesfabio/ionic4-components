import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', null) lista: IonList;
  titulo = 'Listas - Sliding Page';
  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message: string ) {
    // const toast = await this.toastCtrl.create({
    //   message,
    //   duration: 2000,
    //   animated: true,
    //   color: 'youtube'
    // });
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message,
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  favorite( user ) {
    console.log('favorite ', user);
    this.lista.closeSlidingItems();
    this.presentToast('Guardo en Favoritos');
  }

  share( user ) {
    console.log('share ', user);
    this.lista.closeSlidingItems();
    this.presentToast('Compartido');
  }

  borrar( user ) {
    console.log('borrar ', user);
    this.lista.closeSlidingItems();
    this.presentToast('Item borrado');
  }

}
