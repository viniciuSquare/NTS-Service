import { Task } from "../task/Task";
import { Order } from "../order/Order";

export type Customer = {
  address?: Task | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
