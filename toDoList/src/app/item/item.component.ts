import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toDo } from '../toDo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Output() delete = new EventEmitter<toDo>();
  @Input() item: toDo;
  constructor() { }

  ngOnInit() {
  }

}
