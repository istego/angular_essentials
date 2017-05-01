import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() list;
  @Output() chosen: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() newItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  public search = null;

  onNotify(message:string):void {
    this.search = message;
  }

  addNewItem():void {
    this.newItem.emit();
  }

  onChosen(obj:{}):void {
    this.chosen.emit(obj);
  }

  deleteItem(index:number, list:{}[]):void {
    list.splice(index, 1);
    this.chosen.emit(null);
  }

  editItem(index:number, list:{}[]):void {
    let indexObj = {
      index: index
    };
    let obj = Object.assign({}, list[index], indexObj);
    this.onEditItem.emit(obj);
  }

  getNewItem(item:any):void {
    this.list.push(item);
  }

  /*public list = [
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
  ];*/
}
