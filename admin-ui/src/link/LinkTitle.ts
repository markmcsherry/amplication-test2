import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "name";

export const LinkTitle = (record: TLink): string => {
  return record.name || record.id;
};
