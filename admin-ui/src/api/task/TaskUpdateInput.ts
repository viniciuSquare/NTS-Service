import { CustomerUpdateManyWithoutTasksInput } from "./CustomerUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  customers?: CustomerUpdateManyWithoutTasksInput;
  dueTo?: Date | null;
  lastViewed?: Date | null;
  stateNote?: string | null;
};
