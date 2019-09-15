import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  titulo = 'Progress Bar - Range';
  porcentaje: number;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( evento ) {
    console.log('evento: ', evento.detail.value.upper );
    this.porcentaje = evento.detail.value.upper / 100;
  }

}
