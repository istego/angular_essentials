import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
  @Input() currentItem;
  @Input() newItem;
  @Input() editedItem;
  @Output() item: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() onEditItem: EventEmitter<{}> = new EventEmitter<{}>();

  cancelEdit() {
    this.newItem = null;
    this.editedItem = null;
  }

  saveItem(item) {
    if (!!item.name && !!item.birthday) {
      this.item.emit(item);
      this.cancelEdit();
    }
  }

  saveEditItem(item) {
    if (!!item.name && !!item.birthday) {
      this.onEditItem.emit(item);
      this.cancelEdit();
    }
  }
}
