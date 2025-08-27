import { Input } from "@/components/ui/input";
import React from "react";
import { useDataTable } from "./data-table";

function DataTableInputFilter() {
  const { table, filterBy, placeholder } = useDataTable();

  return (
    <Input
      className="max-w-xs"
      placeholder={placeholder}
      value={(table.getColumn(filterBy)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(filterBy)?.setFilterValue(event.target.value)
      }
    />
  );
}

export default DataTableInputFilter;
