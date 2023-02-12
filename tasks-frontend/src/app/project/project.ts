import { Board } from "../board/board";

export interface Project {
  id?: number | null;
  name?: string;
  description?: string;
  status: Status;
  boards?: Board[];
}

export enum Status {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  COMPLETED = 'Completed'
}
