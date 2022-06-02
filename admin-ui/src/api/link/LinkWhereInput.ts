import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LinkWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  url?: StringFilter;
};
