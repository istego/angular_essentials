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
  @Output() editedIndex: EventEmitter<number> = new EventEmitter<number>();

  public deletePopup = false;

  selectCurrentItem() {
    this.chosen.emit(this.item);
    this.deletePopup = false;
  }

  confirmDelete(event) {
    event.stopPropagation();
    this.deletePopup = true;
  }

  deleteItem(index) {
    this.deletedIndex.emit(index);
  }

  dismissDelete() {
    this.deletePopup = false;
  }

  editItem(event, index) {
    event.stopPropagation();
    this.editedIndex.emit(index);
  }
}
