import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantUpdateInput = {
  name?: "S70x50" | "S50x40" | "S40x30" | "S30x21";
  option?: "Size" | null;
  price?: number;
  product?: ProductWhereUniqueInput | null;
  sku?: string;
};