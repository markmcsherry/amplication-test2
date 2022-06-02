import { LinkWhereInput } from "./LinkWhereInput";
import { LinkOrderByInput } from "./LinkOrderByInput";

export type LinkFindManyArgs = {
  where?: LinkWhereInput;
  orderBy?: Array<LinkOrderByInput>;
  skip?: number;
  take?: number;
};
