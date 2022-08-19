import { Variant as TVariant } from "../api/variant/Variant";

export const VARIANT_TITLE_FIELD = "sku";

export const VariantTitle = (record: TVariant): string => {
  return record.sku || record.id;
};
