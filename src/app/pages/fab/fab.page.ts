import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  titulo = 'Fab Page';
  data = Array(100);
  constructor() { }

  ngOnInit() {
  }

}
