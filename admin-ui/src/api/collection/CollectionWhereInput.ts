import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type CollectionWhereInput = {
  data?: JsonFilter;
  description?: StringNullableFilter;
  handle?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  products?: ProductListRelationFilter;
  tags?: TagListRelationFilter;
  title?: StringNullableFilter;
  translations?: JsonFilter;
};
