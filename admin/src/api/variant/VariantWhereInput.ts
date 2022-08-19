import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantWhereInput = {
  id?: StringFilter;
  material?: "basic" | "wooden";
  option?: "size" | "material";
  price?: FloatFilter;
  product?: ProductWhereUniqueInput;
  size?: "S70x50" | "S50x40" | "S40x30" | "S30x21";
  sku?: StringFilter;
};
