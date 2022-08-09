import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { ArtistTitle } from "../artist/ArtistTitle";
import { CollectionTitle } from "../collection/CollectionTitle";
import { TagTitle } from "../tag/TagTitle";
import { VariantTitle } from "../variant/VariantTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="artist.id" reference="Artist" label="Artist">
          <SelectInput optionText={ArtistTitle} />
        </ReferenceInput>
        <TextInput label="Artist Name" source="artistName" />
        <TextInput label="Artist Wikidata" source="artistWikidata" />
        <TextInput label="Artwork Wikidata" source="artworkWikidata" />
        <ReferenceArrayInput
          source="collections"
          reference="Collection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollectionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Handle" source="handle" />
        <BooleanInput
          label="Has Only Default Variant"
          source="hasOnlyDefaultVariant"
        />
        <div />
        <TextInput
          label="Meta Description"
          multiline
          source="metaDescription"
        />
        <div />
        <TextInput label="Meta Title" source="metaTitle" />
        <SelectArrayInput
          label="Orientation"
          source="orientation"
          choices={[
            { label: "Horizontal", value: "Horizontal" },
            { label: "Vertical", value: "Vertical" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
        <TextInput label="Storefront Id" source="storefrontId" />
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
        <ReferenceArrayInput
          source="variants"
          reference="Variant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VariantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
