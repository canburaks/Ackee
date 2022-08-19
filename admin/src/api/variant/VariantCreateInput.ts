import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantCreateInput = {
  material?: "basic" | "wooden" | null;
  option?: "size" | "material" | null;
  price: number;
  product?: ProductWhereUniqueInput | null;
  size?: "S70x50" | "S50x40" | "S40x30" | "S30x21" | null;
  sku: string;
};
