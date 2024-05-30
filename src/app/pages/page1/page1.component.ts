import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  parentInputData = '';
  childInputData: any;

  setData() {
    this.parentInputData = 'Parent Button Clicked !';
  }

  receiveChildData(data: string) {
    this.childInputData = data;
  }
}
