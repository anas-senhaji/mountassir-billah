import { createActionGroup, props } from "@ngrx/store";
import { Board } from "src/app/board/board";
import { User } from "src/app/user/user";

export const BoardActions = createActionGroup({
  source: "Board",
  events: {
    "Load board": props<{ payload: any }>(),
    "Load board success": props<{ board: Board }>(),
    "Load board failure": props<{ payload: any }>(),
    "Add column": props<{ payload: any }>(),
    "Add column success": props<{ payload: any }>(),
    "Add column failure": props<{ payload: any }>(),
    "Add card": props<{ payload: any }>(),
    "Add card success": props<{ payload: any }>(),
    "Add card failure": props<{ payload: any }>(),
    "Delete column": props<{ payload: any }>(),
    "Delete column success": props<{ payload: any }>(),
    "Delete card": props<{ payload: any }>(),
    "Delete card success": props<{ payload: any }>(),
    "Update column": props<{ payload: any }>(),
    "Update column success": props<{ payload: any }>(),
    "Update card": props<{ payload: any }>(),
    "Update card success": props<{ payload: any }>(),
    "View card": props<{ payload: any }>(),
    "Assign user": props<{ payload: any }>(),
    "Assign user success": props<{ payload: any }>(),
    "Assign user failure": props<{ payload: any }>(),
    "Unassign user": props<{ payload: any }>(),
    "Unassign user success": props<{ payload: any }>(),
    "Unassign user failure": props<{ payload: any }>(),
    "Add user": props<{ payload: any }>(),
    "Add user success": props<{ payload: any }>(),
    "Add user failure": props<{ payload: any }>(),
    "Delete user": props<{ payload: any }>(),
    "Delete user success": props<{ payload: any }>(),
    "Delete user failure": props<{ payload: any }>(),
    "Update card order": props<{ payload: any }>(),
    "Update card order success": props<{ payload: any }>(),
    "Update card order failure": props<{ payload: any }>(),
    "Update column order": props<{ payload: any }>(),
    "Update column order success": props<{ payload: any }>(),
    "Update column order failure": props<{ payload: any }>(),
  }
});

