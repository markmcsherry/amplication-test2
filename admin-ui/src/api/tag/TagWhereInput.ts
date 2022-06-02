import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TagWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
