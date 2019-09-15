import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  titulo = 'Checkbox Component';
  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'dark',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log('check: ', check);
  }

}
