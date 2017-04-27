import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
  @Input() currentItem;
  @Input() newItem;
  @Output() item: EventEmitter<{}> = new EventEmitter<{}>();

  cancelEdit() {
    this.newItem = null;
  }

  saveItem(item) {
    if (!!item.name && !!item.birthday) {
      this.item.emit(item);
      this.cancelEdit();
    }
  }
}
