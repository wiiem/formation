import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toDo } from '../toDo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() objectArray:toDo[];
  @Output() itemChange = new EventEmitter<toDo>();
  inputValue = new toDo();
  constructor() { }

  ngOnInit() {
  }

  // handleClick() {
  //   console.log('this.inputValue:  ', this.inputValue);
  //   this.itemChange.emit(this.inputValue);
  // }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.itemChange.emit(Object.assign({}, this.inputValue));
  }

}
