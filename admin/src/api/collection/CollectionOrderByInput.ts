import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  description?: SortOrder;
  handle?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  translations?: SortOrder;
  updatedAt?: SortOrder;
};
