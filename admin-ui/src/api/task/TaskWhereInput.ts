import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  customers?: CustomerListRelationFilter;
  dueTo?: DateTimeNullableFilter;
  id?: StringFilter;
  lastViewed?: DateTimeNullableFilter;
  stateNote?: StringNullableFilter;
};
