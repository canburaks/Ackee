import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { CollectionCreateNestedManyWithoutProductsInput } from "./CollectionCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { TagCreateNestedManyWithoutProductsInput } from "./TagCreateNestedManyWithoutProductsInput";
import { VariantCreateNestedManyWithoutProductsInput } from "./VariantCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  artistName?: string | null;
  artistWikidata?: string | null;
  artworkWikidata?: string | null;
  collections?: CollectionCreateNestedManyWithoutProductsInput;
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
  tags?: TagCreateNestedManyWithoutProductsInput;
  title?: string | null;
  translations?: InputJsonValue;
  variants?: VariantCreateNestedManyWithoutProductsInput;
};
