import { Customer } from "../customer/Customer";

export type Task = {
  createdAt: Date;
  customers?: Array<Customer>;
  dueTo: Date | null;
  id: string;
  lastViewed: Date | null;
  stateNote: string | null;
  updatedAt: Date;
};
