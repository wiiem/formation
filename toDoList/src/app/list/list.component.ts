import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { toDo } from '../toDo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  // to disable the automatic changeDetection of angular on every item of the list ---> good prerformance when add this option
})
export class ListComponent implements OnInit {
  @Output() delete = new EventEmitter<toDo>();
  @Input() objectArray: Object[];
  constructor() { }

  ngOnInit() {
  }
}
