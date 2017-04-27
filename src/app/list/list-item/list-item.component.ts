import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {
  @Input() item;
  @Input() index;
  @Output() chosen: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() deletedIndex: EventEmitter<number> = new EventEmitter<number>();

  selectCurrentItem() {
    this.chosen.emit(this.item);
  }

  deleteItem(index) {
    this.deletedIndex.emit(index);
  }
}
