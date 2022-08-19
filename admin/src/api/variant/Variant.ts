import { Product } from "../product/Product";

export type Variant = {
  createdAt: Date;
  id: string;
  material?: "basic" | "wooden" | null;
  option?: "size" | "material" | null;
  price: number;
  product?: Product | null;
  size?: "S70x50" | "S50x40" | "S40x30" | "S30x21" | null;
  sku: string;
  updatedAt: Date;
};
