import { InputJsonValue } from "../../types";
import { ProductCreateNestedManyWithoutCollectionsInput } from "./ProductCreateNestedManyWithoutCollectionsInput";
import { TagCreateNestedManyWithoutCollectionsInput } from "./TagCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  data?: InputJsonValue;
  description?: string | null;
  handle?: string | null;
  image?: InputJsonValue;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductCreateNestedManyWithoutCollectionsInput;
  status?: Array<"Archived" | "Active" | "Draft">;
  tags?: TagCreateNestedManyWithoutCollectionsInput;
  title?: string | null;
  translations?: InputJsonValue;
};
