import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  dueTo?: SortOrder;
  id?: SortOrder;
  lastViewed?: SortOrder;
  stateNote?: SortOrder;
  updatedAt?: SortOrder;
};
