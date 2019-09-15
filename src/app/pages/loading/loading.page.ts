import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  titulo = 'Loading Page';
  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere por favor');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading( message ) {
    this.loading = await this.loadingCtrl.create({
      message,
      duration: 3000
    });

    return await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading Dismissed');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
