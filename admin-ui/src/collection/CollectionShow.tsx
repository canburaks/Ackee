import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CollectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
