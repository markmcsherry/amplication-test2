import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
