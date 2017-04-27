import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html'
})
export class ListHeaderComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() newItem: EventEmitter<any> = new EventEmitter<any>();

  onChange(search) {
    this.notify.emit(search);
  }

  addNewItem() {
    this.newItem.emit();
  }
}
