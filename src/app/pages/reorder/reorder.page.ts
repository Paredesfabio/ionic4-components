import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes = [ 'Aquaman', 'Batman', 'Mujer MAravilla', 'Dead Pool', 'Thor'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ) {
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }

}
