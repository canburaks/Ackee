import { Artist } from "../artist/Artist";
import { Collection } from "../collection/Collection";
import { Product } from "../product/Product";

export type Tag = {
  artists?: Array<Artist>;
  collections?: Array<Collection>;
  createdAt: Date;
  description: string | null;
  handle: string | null;
  id: string;
  metaDescription: string | null;
  metaTitle: string | null;
  products?: Array<Product>;
  title: string | null;
  updatedAt: Date;
};
