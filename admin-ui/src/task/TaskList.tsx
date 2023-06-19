import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Due To" source="dueTo" />
        <TextField label="ID" source="id" />
        <TextField label="Last Viewed" source="lastViewed" />
        <TextField label="State Note" source="stateNote" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
