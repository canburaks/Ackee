import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type ArtistWhereInput = {
  data?: JsonFilter;
  description?: StringNullableFilter;
  handle?: StringNullableFilter;
  id?: StringFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  products?: ProductListRelationFilter;
  tag?: TagListRelationFilter;
  title?: StringNullableFilter;
  translations?: JsonFilter;
  wikidata?: StringNullableFilter;
};
