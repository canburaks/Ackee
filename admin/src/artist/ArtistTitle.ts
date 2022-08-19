import { Artist as TArtist } from "../api/artist/Artist";

export const ARTIST_TITLE_FIELD = "metaTitle";

export const ArtistTitle = (record: TArtist): string => {
  return record.metaTitle || record.id;
};
