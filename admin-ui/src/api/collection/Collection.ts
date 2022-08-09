import { JsonValue } from "type-fest";
import { Product } from "../product/Product";
import { Tag } from "../tag/Tag";

export type Collection = {
  createdAt: Date;
  data: JsonValue;
  description: string | null;
  handle: string | null;
  id: string;
  image: JsonValue;
  metaDescription: string | null;
  metaTitle: string | null;
  products?: Array<Product>;
  status?: Array<"Archived" | "Active" | "Draft">;
  tags?: Array<Tag>;
  title: string | null;
  translations: JsonValue;
  updatedAt: Date;
};
