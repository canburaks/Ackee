import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Artist" source="artist.id" reference="Artist">
          <TextField source={ARTIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Artist Name" source="artistName" />
        <TextField label="Artist Wikidata" source="artistWikidata" />
        <TextField label="Artwork Wikidata" source="artworkWikidata" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Featured Image" source="featuredImage" />
        <TextField label="Handle" source="handle" />
        <BooleanField
          label="Has Only Default Variant"
          source="hasOnlyDefaultVariant"
        />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <TextField label="Meta Description" source="metaDescription" />
        <TextField label="Metafields" source="metafields" />
        <TextField label="Meta Title" source="metaTitle" />
        <TextField label="Orientation" source="orientation" />
        <TextField label="Status" source="status" />
        <TextField label="Storefront Id" source="storefrontId" />
        <TextField label="Title" source="title" />
        <TextField label="Translations" source="translations" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
