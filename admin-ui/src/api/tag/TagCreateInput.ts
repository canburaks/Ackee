import { ArtistCreateNestedManyWithoutTagsInput } from "./ArtistCreateNestedManyWithoutTagsInput";
import { CollectionCreateNestedManyWithoutTagsInput } from "./CollectionCreateNestedManyWithoutTagsInput";
import { ProductCreateNestedManyWithoutTagsInput } from "./ProductCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  artists?: ArtistCreateNestedManyWithoutTagsInput;
  collections?: CollectionCreateNestedManyWithoutTagsInput;
  description?: string | null;
  handle?: string | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductCreateNestedManyWithoutTagsInput;
  title?: string | null;
};
