import { Card } from "./card/card";

export interface Column {
  id?: number;
  name?: string;
  cards?: Card[];
}
