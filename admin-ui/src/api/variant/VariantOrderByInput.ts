import { SortOrder } from "../../util/SortOrder";

export type VariantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  option?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
