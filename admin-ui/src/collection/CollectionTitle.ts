import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "metaTitle";

export const CollectionTitle = (record: TCollection): string => {
  return record.metaTitle || record.id;
};
