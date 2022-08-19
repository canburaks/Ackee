import { ArtistListRelationFilter } from "../artist/ArtistListRelationFilter";
import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type TagWhereInput = {
  artists?: ArtistListRelationFilter;
  collections?: CollectionListRelationFilter;
  description?: StringNullableFilter;
  handle?: StringNullableFilter;
  id?: StringFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  products?: ProductListRelationFilter;
  title?: StringNullableFilter;
};
