import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Variant"
          target="ProductId"
          label="Variants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Material" source="material" />
            <TextField label="Option" source="option" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Size" source="size" />
            <TextField label="SKU" source="sku" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
