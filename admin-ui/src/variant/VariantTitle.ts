import { Variant as TVariant } from "../api/variant/Variant";

export const VARIANT_TITLE_FIELD = "name";

export const VariantTitle = (record: TVariant): string => {
  return record.name || record.id;
};
