import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "stateNote";

export const TaskTitle = (record: TTask): string => {
  return record.stateNote || String(record.id);
};
