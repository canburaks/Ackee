import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantWhereInput = {
  id?: StringFilter;
  name?: "S70x50" | "S50x40" | "S40x30" | "S30x21";
  option?: "Size";
  product?: ProductWhereUniqueInput;
  sku?: StringFilter;
};
