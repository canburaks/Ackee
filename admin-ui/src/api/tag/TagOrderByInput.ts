import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  handle?: SortOrder;
  id?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
