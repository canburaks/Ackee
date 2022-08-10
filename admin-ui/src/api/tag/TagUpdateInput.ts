import { ArtistUpdateManyWithoutTagsInput } from "./ArtistUpdateManyWithoutTagsInput";
import { CollectionUpdateManyWithoutTagsInput } from "./CollectionUpdateManyWithoutTagsInput";
import { ProductUpdateManyWithoutTagsInput } from "./ProductUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  artists?: ArtistUpdateManyWithoutTagsInput;
  collections?: CollectionUpdateManyWithoutTagsInput;
  description?: string | null;
  handle?: string | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductUpdateManyWithoutTagsInput;
  title?: string | null;
};
