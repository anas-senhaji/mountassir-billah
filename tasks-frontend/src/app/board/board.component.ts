import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  columns = [
    {
      id: 1,
      name: 'To Do',
      cards: [
        {
          id: 1,
          name: 'Create a scrum board',
          description: 'Create a Kanban board using Angular and NgRx'
        },
        {
          id: 2,
          name: 'Create a Kanban board',
          description: 'Create a Kanban board using Angular and NgRx'
        },
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      cards: [
        {
          id: 3,
          name: 'Create a scrum board',
          description: 'Create a Kanban board using Angular and NgRx'
        },
        {
          id: 4,

          name: 'Create a Kanban board',
          description: 'Create a Kanban board using Angular and NgRx'
        },
      ]
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
