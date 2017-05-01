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
  public editedItem = null;

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

  editItem(item):void {
    let dateObj = {
      birthday: new Date(item.birthday).toISOString().slice(0, 10)
    };
    this.editedItem = Object.assign({}, item, dateObj);
  }

  saveItem(item:any):void {
    let dateObj = {
      birthday: new Date(item.birthday).getTime()
    };
    let newItem = Object.assign({}, item, dateObj);
    this.list.push(newItem);
  }

  saveEditItem(item:any):void {
    let dateObj = {
      birthday: new Date(item.birthday).getTime()
    };
    let editedItem = Object.assign({}, item, dateObj);
    this.list[item.index] = editedItem;
    this.currentItem = editedItem;
  }

}
