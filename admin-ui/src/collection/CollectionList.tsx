import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CollectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Collections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <TextField label="Description" source="description" />
        <TextField label="Handle" source="handle" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Meta Description" source="metaDescription" />
        <TextField label="Meta Title" source="metaTitle" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Translations" source="translations" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
