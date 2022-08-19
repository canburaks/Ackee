import { SortOrder } from "../../util/SortOrder";

export type VariantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  material?: SortOrder;
  option?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  size?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
