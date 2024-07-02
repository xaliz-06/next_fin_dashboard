import React from "react";
import AccountsFilter from "./accounts-filter";
import { DateFilter } from "./date-filter";

const Filters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountsFilter />
      <DateFilter />
    </div>
  );
};

export default Filters;
