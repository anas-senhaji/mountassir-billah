import { User } from "../user/user";
import { Column } from "./column/column";

export interface Board {
  id?: number;
  name?: string;
  description?: string;
  columns?: Column[] | null;
  users?: User[];
}
