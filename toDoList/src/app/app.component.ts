import { Component } from '@angular/core';
import { toDo } from './toDo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoList';
  objectArray: toDo[] = [
    {id: 1, label:'First choice', completed: false},
    {id: 2, label:'Second choice', completed: true},
    {id: 3, label:'third choice', completed: false}
  ];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
      this.objectArray = [...this.objectArray, ...data.map(c => ({id: c.id, label: c.title, completed: c.completed}))];  // il faut ajouter les parenthèses pour qu'il ne confond pas avec le return de la fonction  --> une expression dans ce cas pour changer les keys du tableau
    });
  }

  addToArray(item) {
    this.objectArray = [...this.objectArray, item];
  }

  deleteFromArray(item) {
    this.objectArray = this.objectArray.filter((elt) => elt !== item);
  }
}
