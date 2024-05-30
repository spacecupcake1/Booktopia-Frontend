import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  parentText = ''
  @Output()
  childEvent= new EventEmitter<string>();

  setData() {
      this.childEvent.emit('Child Button Clicked!');
  }
}
