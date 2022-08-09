import { VariantWhereInput } from "./VariantWhereInput";
import { VariantOrderByInput } from "./VariantOrderByInput";

export type VariantFindManyArgs = {
  where?: VariantWhereInput;
  orderBy?: Array<VariantOrderByInput>;
  skip?: number;
  take?: number;
};
