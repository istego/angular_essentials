import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {

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

  public currentItem = null;
  public newItem = null;

  onChosen(obj:{}):void {
    this.currentItem = obj;
  }

  addNewItem():void {
    this.newItem = {
      name: null,
      sex: 'male',
      birthday: null
    };
  }

  saveItem(item:any):void {
    let dateObj = {
      birthday: new Date(item.birthday).getTime()
    };
    let newItem = Object.assign({}, item, dateObj);
    this.list.push(newItem);
  }

}
