import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {
  @Input() item;
  @Output() choose: EventEmitter<{}> = new EventEmitter<{}>();

  chooseCurrentItem() {
    this.choose.emit({name: 'qwe'});
  }
}
