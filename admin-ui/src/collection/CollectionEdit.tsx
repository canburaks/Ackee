import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { TagTitle } from "../tag/TagTitle";

export const CollectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Handle" source="handle" />
        <div />
        <TextInput
          label="Meta Description"
          multiline
          source="metaDescription"
        />
        <TextInput label="Meta Title" source="metaTitle" />
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="Status"
          source="status"
          choices={[
            { label: "ARCHIVED", value: "Archived" },
            { label: "ACTIVE", value: "Active" },
            { label: "DRAFT", value: "Draft" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
