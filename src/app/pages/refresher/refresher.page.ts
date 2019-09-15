import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  titulo = 'Refresher Page';
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ) {
    console.log('event: ', event);

    setTimeout(() => {
      this.items = Array(40);
      event.target.complete();
    }, 1500 );
  }

}
