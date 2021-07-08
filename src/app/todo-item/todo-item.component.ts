import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo
  @Output() TodoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {

  }



  onTodoClicked(){
    this.TodoClicked.emit()
  }

  OnEditClicked(){
    this.editClicked.emit()
  }

  OnDeleteClicked(){
    this.deleteClicked.emit()
  }

}
