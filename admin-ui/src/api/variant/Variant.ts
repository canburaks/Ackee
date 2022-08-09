import { Product } from "../product/Product";

export type Variant = {
  createdAt: Date;
  id: string;
  name?: "S70x50" | "S50x40" | "S40x30" | "S30x21";
  option?: "Size" | null;
  product?: Product | null;
  sku: string;
  updatedAt: Date;
};
