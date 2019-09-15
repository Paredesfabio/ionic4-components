import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  titulo = 'Datetime Component';
  fechaNaci: Date = new Date();
  customPickerOptions: any;
  customDate;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event) => {
          console.log('Clicked Save!', event);
          console.log(event.day.value);
          console.log(event.month.value);
          console.log(event.year.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha( event ) {
    console.log('ionChange ', event.detail.value);
    console.log('Date ', new Date(event.detail.value));
  }

}
