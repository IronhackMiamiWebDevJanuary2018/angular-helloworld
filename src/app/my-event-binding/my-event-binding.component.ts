import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  template: `
    <input (keyup)="recordAllTheKeyStrokes($event)">
  `
})
export class MyEventBindingComponent {
  recordAllTheKeyStrokes(event) {
    console.log(`Key inserted: ${event.key}`);
  }
}
