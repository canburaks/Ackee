import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { CollectionUpdateManyWithoutProductsInput } from "./CollectionUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { TagUpdateManyWithoutProductsInput } from "./TagUpdateManyWithoutProductsInput";
import { VariantUpdateManyWithoutProductsInput } from "./VariantUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  artistName?: string | null;
  artistWikidata?: string | null;
  artworkWikidata?: string | null;
  collections?: CollectionUpdateManyWithoutProductsInput;
  description?: string | null;
  featuredImage?: InputJsonValue;
  handle?: string | null;
  hasOnlyDefaultVariant?: boolean | null;
  images?: InputJsonValue;
  metaDescription?: string | null;
  metafields?: InputJsonValue;
  metaTitle?: string | null;
  orientation?: Array<"Horizontal" | "Vertical">;
  status?: Array<"Archived" | "Active" | "Draft">;
  storefrontId?: string | null;
  tags?: TagUpdateManyWithoutProductsInput;
  title?: string | null;
  translations?: InputJsonValue;
  variants?: VariantUpdateManyWithoutProductsInput;
};
