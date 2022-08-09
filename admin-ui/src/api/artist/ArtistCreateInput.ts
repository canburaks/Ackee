import { InputJsonValue } from "../../types";
import { ProductCreateNestedManyWithoutArtistsInput } from "./ProductCreateNestedManyWithoutArtistsInput";
import { TagCreateNestedManyWithoutArtistsInput } from "./TagCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  data?: InputJsonValue;
  description?: string | null;
  handle?: string | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductCreateNestedManyWithoutArtistsInput;
  tag?: TagCreateNestedManyWithoutArtistsInput;
  title?: string | null;
  translations?: InputJsonValue;
  wikidata?: string | null;
};
