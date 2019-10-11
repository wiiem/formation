import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() items: string[] = [];
  @Output() itemChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(item) {
    this.itemChange.emit(item);
  }
}
