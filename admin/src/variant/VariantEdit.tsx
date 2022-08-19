import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const VariantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="material"
          label="Material"
          choices={[
            { label: "Basic", value: "basic" },
            { label: "Wooden", value: "wooden" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="option"
          label="Option"
          choices={[
            { label: "Size", value: "size" },
            { label: "Material", value: "material" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <SelectInput
          source="size"
          label="Size"
          choices={[
            { label: "S70x50", value: "S70x50" },
            { label: "S50x40", value: "S50x40" },
            { label: "S40x30", value: "S40x30" },
            { label: "S30x21", value: "S30x21" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="SKU" source="sku" />
      </SimpleForm>
    </Edit>
  );
};
