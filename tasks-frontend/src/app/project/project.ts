export interface Project {
  id?: number | null;
  name?: string;
  description?: string;
  status: Status;
}

export enum Status {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  COMPLETED = 'Completed'
}
