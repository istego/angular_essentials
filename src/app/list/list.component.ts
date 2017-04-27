import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  constructor() {

  }

  public search = null;

  onNotify(message:string):void {
    this.search = message;
  }

  onChoose(obj:{}):void {
    console.log(obj);
  }

  public list = [
    {
      name: 'Paul',
      sex: 'male',
      birthday: 1000151481753
    },
    {
      name: 'Marcos',
      sex: 'male',
      birthday: 1012150581753
    }
  ];
}
