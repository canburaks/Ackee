import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutArtistsInput } from "./ProductUpdateManyWithoutArtistsInput";
import { TagUpdateManyWithoutArtistsInput } from "./TagUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  data?: InputJsonValue;
  description?: string | null;
  handle?: string | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductUpdateManyWithoutArtistsInput;
  tag?: TagUpdateManyWithoutArtistsInput;
  title?: string | null;
  translations?: InputJsonValue;
  wikidata?: string | null;
};
