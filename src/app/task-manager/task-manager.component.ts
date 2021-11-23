import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  todos : Todo[]=[];
  doing : Todo[]=[];
  done : Todo[]=[];

  constructor() { }

  ngOnInit(): void {
    //INITIALISATION:
    this.todos = [
      new Todo(1,'Lundi', 'Pick up groceries', 'done'),
      new Todo(1,'Mardi', 'Take a shower', 'done')
    ];

     }

  //Drag and drop example


  // todos = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    //test si on est dans la même liste:
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }//Sinon
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
