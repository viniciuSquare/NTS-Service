import { CustomerCreateNestedManyWithoutTasksInput } from "./CustomerCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  customers?: CustomerCreateNestedManyWithoutTasksInput;
  dueTo?: Date | null;
  lastViewed?: Date | null;
  stateNote?: string | null;
};
