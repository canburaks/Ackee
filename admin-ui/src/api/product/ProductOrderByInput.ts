import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  artistId?: SortOrder;
  artistName?: SortOrder;
  artistWikidata?: SortOrder;
  artworkWikidata?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  featuredImage?: SortOrder;
  handle?: SortOrder;
  hasOnlyDefaultVariant?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  metaDescription?: SortOrder;
  metafields?: SortOrder;
  metaTitle?: SortOrder;
  orientation?: SortOrder;
  status?: SortOrder;
  storefrontId?: SortOrder;
  title?: SortOrder;
  translations?: SortOrder;
  updatedAt?: SortOrder;
};
