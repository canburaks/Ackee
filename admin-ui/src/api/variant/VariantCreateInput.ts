import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantCreateInput = {
  name: "S70x50" | "S50x40" | "S40x30" | "S30x21";
  option?: "Size" | null;
  product?: ProductWhereUniqueInput | null;
  sku: string;
};
