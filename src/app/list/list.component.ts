import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  constructor() {

  }

  public list = [
    {
      name: 'Paul',
      sex: 'male',
      birthday: '11.03.1684'
    },
    {
      name: 'Marcos',
      sex: 'male',
      birthday: '16.05.1711'
    }
  ];
}
