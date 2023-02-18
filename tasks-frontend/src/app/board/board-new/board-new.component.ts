import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardActions } from 'src/app/state/board';

@Component({
  selector: 'app-board-new',
  templateUrl: './board-new.component.html',
  styleUrls: ['./board-new.component.scss']
})
export class BoardNewComponent implements OnInit {
  boardTitle: string = '';
  // view modal
  @ViewChild('closeButton') closeButton: ElementRef<HTMLButtonElement> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log(this.closeButton);

  }

  onAddBoard(event: any) {
    let name = event.target[0].value;

    this.store.dispatch({ type: BoardActions.createBoard.type, payload: {name} });
    this.closeButton!.nativeElement.click();
  }

}
