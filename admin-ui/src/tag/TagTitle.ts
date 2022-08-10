import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "metaTitle";

export const TagTitle = (record: TTag): string => {
  return record.metaTitle || record.id;
};
