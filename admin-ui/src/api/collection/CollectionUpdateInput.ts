import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutCollectionsInput } from "./ProductUpdateManyWithoutCollectionsInput";
import { TagUpdateManyWithoutCollectionsInput } from "./TagUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  data?: InputJsonValue;
  description?: string | null;
  handle?: string | null;
  image?: InputJsonValue;
  metaDescription?: string | null;
  metaTitle?: string | null;
  products?: ProductUpdateManyWithoutCollectionsInput;
  status?: Array<"Archived" | "Active" | "Draft">;
  tags?: TagUpdateManyWithoutCollectionsInput;
  title?: string | null;
  translations?: InputJsonValue;
};
