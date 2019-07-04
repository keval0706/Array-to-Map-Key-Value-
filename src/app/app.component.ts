import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  values = [{ 'key1': 'value1' }, { 'key2': 'value2' }, { 'key3': 'value3' }, { 'key4': 'value4' }, { 'key5': 'value5' }, { 'key6': 'value6' }]

  keyValue = new Map();
  keyArray = [];

  ngOnInit() {

    for (var o1 in this.values) {
      const key = Object.keys(this.values[o1])[0]; 
      const value = this.values[o1][key];
      this.keyValue.set(key, value)
    }
  }
}
