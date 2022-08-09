import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  description?: SortOrder;
  handle?: SortOrder;
  id?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  title?: SortOrder;
  translations?: SortOrder;
  updatedAt?: SortOrder;
  wikidata?: SortOrder;
};
