import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ArtistTitle } from "../artist/ArtistTitle";
import { CollectionTitle } from "../collection/CollectionTitle";
import { ProductTitle } from "../product/ProductTitle";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="artists"
          reference="Artist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ArtistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="collections"
          reference="Collection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollectionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Handle" source="handle" />
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
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
